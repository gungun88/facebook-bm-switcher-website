# 📤 GitHub 推送步骤指南（技术小白版）

## 🎯 目标
将您本地的最新代码推送到 GitHub，然后在宝塔面板中拉取更新。

## 📋 第一步：检查 GitHub 连接

在终端中输入：
```bash
git remote -v
```

**期望的结果**：
应该看到类似这样的输出：
```
origin  https://github.com/gungun88/facebook-bm-switcher-website.git (fetch)
origin  https://github.com/gungun88/facebook-bm-switcher-website.git (push)
```

## 📋 第二步：检查当前状态

```bash
git status
```

**期望的结果**：
应该显示 "working tree clean"（工作目录干净）

## 📋 第三步：推送到 GitHub

```bash
git push origin main
```

**可能遇到的情况**：

### 情况1：成功推送
看到类似输出：
```
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Writing objects: 100% (8/8), 1.23 KiB | 1.23 MiB/s, done.
Total 8 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/gungun88/facebook-bm-switcher-website.git
   abc1234..def5678  main -> main
```
✅ **成功！可以进行下一步**

### 情况2：需要身份验证
如果提示输入用户名和密码：

**对于新版 GitHub（推荐使用 Token）**：
1. 用户名：输入您的 GitHub 用户名
2. 密码：输入您的 GitHub Personal Access Token（不是账户密码）

**如果没有 Token，需要创建**：
1. 打开 https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 勾选 "repo" 权限
4. 复制生成的 Token 作为密码使用

### 情况3：推送被拒绝
如果看到 "rejected" 错误：
```bash
git pull origin main
git push origin main
```

## 📋 第四步：验证推送成功

1. 打开浏览器访问您的 GitHub 仓库
2. 刷新页面，检查是否看到最新的提交
3. 确认 `宝塔重新部署指南.md` 文件出现在仓库中

## 🎯 完成推送后的下一步

现在您可以在宝塔面板中更新代码了！

### 在宝塔面板中执行：

1. **登录宝塔面板**
2. **打开终端**
3. **进入网站目录**：
   ```bash
   cd /www/wwwroot/您的域名
   ```
4. **拉取最新代码**：
   ```bash
   git pull origin main
   ```
5. **重新构建和重启**：
   ```bash
   pnpm install
   pnpm build
   pm2 restart facebook-bm-switcher
   ```

## 🆘 常见问题解决

### Q1: git push 要求用户名密码，但我输入正确密码后还是失败
**A**: GitHub 已经不支持密码验证，需要使用 Personal Access Token：
1. 访问 https://github.com/settings/tokens
2. 创建新的 Token
3. 将 Token 作为密码使用

### Q2: 提示 "fatal: not a git repository"
**A**: 确保您在正确的项目目录中：
```bash
pwd
# 确认当前目录是 /c/Users/ATZ/Desktop/chrome-extension-page
```

### Q3: 推送时提示冲突
**A**: 先拉取远程更改：
```bash
git pull origin main --rebase
git push origin main
```

### Q4: 忘记了 GitHub 用户名
**A**: 可以通过以下命令查看：
```bash
git config user.name
git config user.email
```

## ✅ 成功标志

当您看到以下内容时，说明推送成功：
- Git push 命令执行无错误
- GitHub 网页上能看到最新代码
- 宝塔面板能成功 pull 到更新

---

**💡 记住**：以后每次修改代码后，都需要：
1. `git add .`
2. `git commit -m "描述您的更改"`  
3. `git push origin main`
4. 然后在宝塔面板中 `git pull origin main`
