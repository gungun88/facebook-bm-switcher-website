# 解决 403 Forbidden 错误

## 🔍 排查步骤

### 第一步：检查 Next.js 应用是否正在运行

```bash
# 1. 检查 PM2 状态
pm2 status

# 2. 检查端口 3000 是否被监听
netstat -tlnp | grep :3000

# 3. 如果没有运行，启动应用
cd /www/wwwroot/bmswitcher.com
pm2 start ecosystem.config.js

# 4. 查看 PM2 日志
pm2 logs facebook-bm-switcher
```

### 第二步：检查文件权限

```bash
# 设置正确的文件权限
cd /www/wwwroot
chown -R www:www bmswitcher.com
chmod -R 755 bmswitcher.com

# 特别检查关键目录权限
chmod 755 /www/wwwroot/bmswitcher.com
chmod 755 /www/wwwroot/bmswitcher.com/.next
chmod -R 644 /www/wwwroot/bmswitcher.com/.next/static
chmod -R 755 /www/wwwroot/bmswitcher.com/.next/static
```

### 第三步：测试 Next.js 应用

```bash
# 测试本地端口 3000
curl -I http://localhost:3000

# 如果上面命令失败，手动启动测试
cd /www/wwwroot/bmswitcher.com
npm start
```

### 第四步：检查 Nginx 配置和重载

```bash
# 测试 Nginx 配置
nginx -t

# 重载 Nginx
nginx -s reload

# 重启 Nginx（如果需要）
systemctl restart nginx
```

### 第五步：查看错误日志

```bash
# 查看 Nginx 错误日志
tail -f /www/wwwlogs/bmswitcher.com.error.log

# 查看 Nginx 主错误日志
tail -f /www/server/nginx/logs/error.log

# 查看 PM2 日志
pm2 logs facebook-bm-switcher --lines 50
```

## 🛠️ 常见解决方案

### 方案 1：如果 Next.js 应用没有运行

```bash
cd /www/wwwroot/bmswitcher.com

# 确保依赖已安装
pnpm install

# 重新构建
pnpm build

# 启动应用
pm2 start ecosystem.config.js

# 检查状态
pm2 status
```

### 方案 2：如果权限问题

```bash
# 递归设置权限
chown -R www:www /www/wwwroot/bmswitcher.com
chmod -R 755 /www/wwwroot/bmswitcher.com

# 设置 .next 目录权限
chmod -R 755 /www/wwwroot/bmswitcher.com/.next
```

### 方案 3：临时禁用静态文件尝试

在 Nginx 配置中临时注释掉静态文件处理，直接代理所有请求：

```nginx
# 临时注释这些 location 块
# location /_next/static/ { ... }
# location ~* ^/(.*\.(png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot))$ { ... }

# 让所有请求都走代理
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

### 方案 4：检查 SELinux（如果启用）

```bash
# 检查 SELinux 状态
getenforce

# 如果是 Enforcing，临时禁用测试
setenforce 0
```
