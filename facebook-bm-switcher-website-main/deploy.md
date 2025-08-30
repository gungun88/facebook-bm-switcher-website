# Facebook BM 切换器网站 - 宝塔面板部署指南

## 📋 部署前准备

### 1. 服务器要求
- **操作系统**: CentOS 7+ / Ubuntu 18+ / Debian 9+
- **内存**: 最低 2GB，推荐 4GB
- **硬盘**: 至少 20GB 可用空间
- **宝塔面板**: 7.7.0 或更高版本

### 2. 必需软件环境
- **Node.js**: 18.17.0 或更高版本
- **npm/pnpm**: 最新版本
- **PM2**: 进程管理器（可选但推荐）

## 🚀 宝塔面板部署步骤

### 第一步：安装软件环境

1. **登录宝塔面板**
   ```
   http://你的服务器IP:8888
   ```

2. **安装 Node.js**
   - 进入 `软件商店` → `运行环境`
   - 找到 `Node.js 版本管理器` 并安装
   - 安装完成后，安装 Node.js 18.17.0 或更高版本

3. **安装 PM2**（推荐）
   - 在宝塔面板终端中执行：
   ```bash
   npm install -g pm2
   ```

### 第二步：创建网站

1. **添加站点**
   - 进入 `网站` → `添加站点`
   - 域名：填入你的域名（如：facebook-bm.com）
   - 根目录：自定义（如：/www/wwwroot/facebook-bm）
   - 数据库：不创建
   - PHP版本：不选择

2. **配置SSL证书**（推荐）
   - 进入网站设置 → SSL
   - 选择 `Let's Encrypt` 免费SSL证书
   - 或上传你自己的SSL证书

### 第三步：上传项目文件

1. **上传代码**
   方式一：使用宝塔文件管理器
   - 将项目打包成 zip 文件
   - 通过宝塔面板上传到网站根目录
   - 解压文件

   方式二：使用 Git（推荐）
   ```bash
   cd /www/wwwroot/facebook-bm
   git clone 你的Git仓库地址 .
   ```

2. **安装依赖**
   在宝塔终端中执行：
   ```bash
   cd /www/wwwroot/facebook-bm
   
   # 如果使用 npm
   npm install
   
   # 如果使用 pnpm（推荐，更快）
   npm install -g pnpm
   pnpm install
   ```

### 第四步：构建项目

```bash
cd /www/wwwroot/facebook-bm

# 构建生产版本
npm run build
# 或
pnpm build
```

### 第五步：配置 Nginx 反向代理

1. **编辑网站配置**
   - 进入网站设置 → 配置文件
   - 替换配置内容：

```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name 你的域名.com;
    
    # SSL配置
    ssl_certificate /www/server/panel/vhost/cert/你的域名/fullchain.pem;
    ssl_certificate_key /www/server/panel/vhost/cert/你的域名/privkey.pem;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # HTTPS 重定向
    if ($server_port !~ 443){
        rewrite ^(/.*)$ https://$host$1 permanent;
    }
    
    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # 静态文件缓存
    location /_next/static/ {
        alias /www/wwwroot/facebook-bm/.next/static/;
        expires 1y;
        add_header Cache-Control "public, immutable";
        add_header Vary Accept-Encoding;
    }
    
    location /public/ {
        alias /www/wwwroot/facebook-bm/public/;
        expires 1M;
        add_header Cache-Control "public";
    }
    
    # Next.js 应用代理
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
        proxy_read_timeout 86400;
    }
    
    # 安全头设置
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

### 第六步：启动应用

1. **使用 PM2 启动**（推荐）
   ```bash
   cd /www/wwwroot/facebook-bm
   
   # 使用 PM2 启动
   pm2 start ecosystem.config.js
   
   # 查看运行状态
   pm2 status
   
   # 查看日志
   pm2 logs facebook-bm-switcher
   
   # 设置开机自启
   pm2 startup
   pm2 save
   ```

2. **或直接启动**
   ```bash
   cd /www/wwwroot/facebook-bm
   npm start
   ```

### 第七步：验证部署

1. **检查应用状态**
   ```bash
   # 检查端口是否监听
   netstat -tlnp | grep :3000
   
   # 检查 PM2 状态
   pm2 status
   ```

2. **访问网站**
   在浏览器中访问你的域名，检查网站是否正常显示

## 🔧 常用维护命令

### PM2 管理命令
```bash
# 重启应用
pm2 restart facebook-bm-switcher

# 停止应用
pm2 stop facebook-bm-switcher

# 删除应用
pm2 delete facebook-bm-switcher

# 查看实时日志
pm2 logs facebook-bm-switcher --lines 100

# 监控应用性能
pm2 monit
```

### 更新部署
```bash
cd /www/wwwroot/facebook-bm

# 拉取最新代码
git pull

# 安装新依赖（如有）
pnpm install

# 重新构建
pnpm build

# 重启应用
pm2 restart facebook-bm-switcher
```

## 🚨 常见问题解决

### 1. 端口冲突
如果 3000 端口被占用：
```bash
# 查看端口占用
lsof -i :3000

# 修改端口（在 ecosystem.config.js 中修改 PORT）
```

### 2. 权限问题
```bash
# 设置正确的文件权限
chown -R www:www /www/wwwroot/facebook-bm
chmod -R 755 /www/wwwroot/facebook-bm
```

### 3. 内存不足
```bash
# 查看内存使用情况
free -h

# 如果内存不足，可以创建交换文件
dd if=/dev/zero of=/swapfile bs=1024 count=1048576
mkswap /swapfile
swapon /swapfile
```

### 4. Node.js 版本问题
```bash
# 使用 Node 版本管理器切换版本
n stable
# 或
nvm use 18
```

## 🎯 性能优化建议

1. **启用 Gzip 压缩**（已在 Nginx 配置中包含）
2. **配置 CDN**（如阿里云CDN、腾讯云CDN）
3. **定期清理日志**
   ```bash
   pm2 flush
   ```
4. **监控服务器性能**
   - 使用宝塔面板的监控功能
   - 设置内存、CPU 使用率告警

## 📞 技术支持

如果部署过程中遇到问题，可以：
1. 查看 PM2 日志：`pm2 logs`
2. 查看 Nginx 错误日志：宝塔面板 → 网站 → 日志
3. 检查防火墙设置：确保 80、443 端口开放

部署完成后，你的 Facebook BM 切换器网站就可以正常访问了！🎉
