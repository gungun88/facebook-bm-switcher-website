# Git 自动化部署完整教程

## 📚 第一步：理解Git和GitHub

### 什么是Git？
- Git 是一个版本控制工具，可以跟踪代码的变化
- 就像是代码的"时光机"，可以回到任何历史版本

### 什么是GitHub？
- GitHub 是存储Git代码的云平台
- 免费提供代码托管服务
- 全世界的开发者都在使用

## 🚀 第二步：注册GitHub账号

### 1. 访问GitHub官网
- 网址：https://github.com
- 点击右上角 "Sign up" 注册

### 2. 填写注册信息
```
用户名：选择一个唯一的用户名（比如：your-name-2024）
邮箱：填写您的邮箱
密码：设置一个强密码
```

### 3. 验证邮箱
- 注册后检查邮箱
- 点击验证链接完成验证

## 📁 第三步：创建代码仓库

### 1. 创建新仓库
- 登录GitHub后，点击右上角 "+" 号
- 选择 "New repository"

### 2. 填写仓库信息
```
Repository name: facebook-bm-switcher-website
Description: Facebook Business Manager 界面切换器官网
选择 Public（公开）或 Private（私有）
勾选 "Add a README file"
```

### 3. 创建完成
- 点击 "Create repository"
- 记住仓库地址，格式：https://github.com/你的用户名/facebook-bm-switcher-website

## 💻 第四步：在电脑上安装Git

### Windows系统：
1. 下载Git：https://git-scm.com/download/win
2. 双击安装，全部选择默认选项即可
3. 安装完成后，右键桌面选择 "Git Bash Here"

### 配置Git（首次使用）：
```bash
git config --global user.name "你的姓名"
git config --global user.email "你的邮箱@example.com"
```

## 📤 第五步：上传本地代码到GitHub

### 1. 在项目文件夹中打开Git Bash
- 进入你的项目文件夹：C:\Users\ATZ\Desktop\chrome-extension-page
- 右键选择 "Git Bash Here"

### 2. 初始化Git仓库
```bash
# 初始化Git
git init

# 添加远程仓库（替换成你的仓库地址）
git remote add origin https://github.com/你的用户名/facebook-bm-switcher-website.git
```

### 3. 上传代码
```bash
# 添加所有文件到Git
git add .

# 提交代码
git commit -m "初始化 Facebook BM 切换器网站"

# 推送到GitHub
git push -u origin main
```

如果提示需要登录，输入GitHub用户名和密码。

## 🖥️ 第六步：在服务器上设置Git

### 1. 在宝塔终端中配置Git
```bash
# 检查是否已安装Git
git --version

# 如果没有安装Git，执行：
yum install git -y  # CentOS
# 或
apt install git -y  # Ubuntu

# 配置Git用户信息
git config --global user.name "你的姓名"
git config --global user.email "你的邮箱@example.com"
```

### 2. 备份当前网站代码
```bash
cd /www/wwwroot
mv bmswitcher.com bmswitcher.com.backup
```

### 3. 从GitHub克隆代码
```bash
cd /www/wwwroot
git clone https://github.com/你的用户名/facebook-bm-switcher-website.git bmswitcher.com
cd bmswitcher.com
```

### 4. 安装依赖和构建
```bash
npm install
npm run build
pm2 restart bmswitcher
```

## 🔄 第七步：以后的更新流程

### 在本地电脑修改代码后：
```bash
# 1. 添加修改的文件
git add .

# 2. 提交修改（写清楚修改了什么）
git commit -m "修改了网站图标和标题"

# 3. 推送到GitHub
git push origin main
```

### 在服务器上更新：
```bash
# 1. 进入网站目录
cd /www/wwwroot/bmswitcher.com

# 2. 拉取最新代码
git pull origin main

# 3. 重新构建和重启
npm install
npm run build
pm2 restart bmswitcher
```

## 🎯 第八步：创建一键更新脚本

### 在服务器上创建更新脚本
```bash
# 创建更新脚本
cd /www/wwwroot/bmswitcher.com
nano update.sh
```

### 脚本内容：
```bash
#!/bin/bash
echo "开始更新网站..."
cd /www/wwwroot/bmswitcher.com
git pull origin main
npm install
npm run build
pm2 restart bmswitcher
echo "网站更新完成！"
```

### 给脚本执行权限：
```bash
chmod +x update.sh
```

### 以后更新只需要：
```bash
cd /www/wwwroot/bmswitcher.com
./update.sh
```

## 🛠️ 常见问题解决

### 1. Git push 需要密码
- GitHub现在需要使用Personal Access Token
- 设置方法：GitHub → Settings → Developer settings → Personal access tokens

### 2. 权限问题
```bash
# 设置正确的文件权限
chown -R www:www /www/wwwroot/bmswitcher.com
```

### 3. 端口冲突
```bash
# 检查端口占用
netstat -tlnp | grep :3000
```

## ✅ 完成后的好处

1. **版本控制**：可以随时回到任何历史版本
2. **自动化部署**：一个命令完成更新
3. **代码备份**：GitHub自动备份您的代码
4. **协作开发**：以后可以和其他人一起开发
5. **专业形象**：拥有专业的代码管理流程

## 🎉 总结

设置完成后，您的工作流程将变成：
1. 在本地修改代码
2. `git add . && git commit -m "修改说明" && git push`
3. 在服务器运行 `./update.sh`
4. 完成！

这样就实现了专业的自动化部署流程！
