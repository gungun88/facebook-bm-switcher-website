"use client"

import { useState, useEffect } from "react"
import { Chrome, Users, Star, Download, Menu, X, ArrowLeftRight, RefreshCw, ToggleLeft, Mail, MessageCircle, Clock, Heart, Target, Zap, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userCount, setUserCount] = useState(0)
  const [downloadCount, setDownloadCount] = useState(0)
  const [rating, setRating] = useState(0)

  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void, duration = 2000) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
    }

    animateCounter(10000, setUserCount)
    animateCounter(25000, setDownloadCount)
    animateCounter(4.8, (value) => setRating(value / 1000), 2000)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ArrowLeftRight className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold text-xl">Facebook BM 切换器</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-primary transition-colors scroll-smooth">
                功能特点
              </a>
              <a href="#tutorial" className="hover:text-primary transition-colors scroll-smooth">
                使用教程
              </a>
              <a href="#support" className="hover:text-primary transition-colors scroll-smooth">
                技术支持
              </a>
              <a href="#about" className="hover:text-primary transition-colors scroll-smooth">
                关于我们
              </a>
            </nav>

            <Button size="lg" className="hidden md:inline-flex text-lg px-8 py-3">
              立即安装
            </Button>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col gap-4">
                <a href="#features" className="hover:text-primary transition-colors scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  功能特点
                </a>
                <a href="#tutorial" className="hover:text-primary transition-colors scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  使用教程
                </a>
                <a href="#support" className="hover:text-primary transition-colors scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  技术支持
                </a>
                <a href="#about" className="hover:text-primary transition-colors scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  关于我们
                </a>
                <Button size="lg" className="mt-2 text-lg px-8 py-3">
                  立即安装
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-center">
            Facebook Business Manager
            <span className="block text-primary">界面切换器</span>
          </h1>
          <p className="text-xl text-blue-300 mb-8 max-w-2xl mx-auto">
            一键切换新旧界面，提升工作效率。专为中国用户优化，支持全中文界面显示。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-xl px-10 py-4 h-14">
              立即安装
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-10 py-4 h-14 bg-transparent" asChild>
              <a href="#video-tutorial" className="scroll-smooth">
                查看教程
              </a>
            </Button>
          </div>

          <div className="text-sm text-gray-400 space-y-1">
            <p>v1.0.0 - 发布于 2024-12-15</p>
            <p>支持 Chrome 88+ 版本</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{userCount.toLocaleString()}+</div>
              <div className="text-gray-400">活跃用户</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-12 h-12 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{downloadCount.toLocaleString()}+</div>
              <div className="text-gray-400">总下载量</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-12 h-12 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{(rating * 1000).toFixed(1)}/5.0</div>
              <div className="text-gray-400">用户评分</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">核心功能</h2>
            <p className="text-xl text-gray-300">简单易用，功能强大</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-8 mb-6 h-64 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <div className="flex-1 h-2 bg-gray-300 rounded"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-8 bg-gray-400 rounded"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">一键切换界面</h3>
              <p className="text-gray-400">点击浏览器工具栏图标，即可在新旧 Facebook Business Manager 界面间快速切换</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-8 mb-6 h-64 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">检测中...</span>
                    </div>
                    <div className="bg-gray-100 rounded p-4 mb-4">
                      <div className="h-2 bg-orange-400 rounded w-2/3 mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded w-full"></div>
                    </div>
                    <div className="text-center">
                      <span className="text-sm text-red-500">✓ 当前：新界面</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">智能检测界面</h3>
              <p className="text-gray-400">自动识别当前 Facebook Business Manager 界面类型，显示切换状态</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-8 mb-6 h-64 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm bg-gray-200 px-2 py-1 rounded">中文界面</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 bg-orange-400 rounded w-full"></div>
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                      <div className="text-center py-2">
                        <span className="text-xs text-gray-600">切换到旧界面</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">全中文界面</h3>
              <p className="text-gray-400">简洁直观的中文用户界面，按钮和提示全中文显示</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section id="tutorial" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">使用教程</h2>
            <p className="text-xl text-gray-300">简单3步，即可开始使用 Facebook BM 切换器</p>
          </div>

          {/* Installation Steps */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold mb-12 text-center">📥 安装步骤</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-6 h-full">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="mb-4">
                    <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                      <Chrome className="w-12 h-12 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">打开 Chrome 扩展商店</h4>
                    <p className="text-gray-400 text-sm">访问 Chrome Web Store，搜索 "Facebook BM 切换器"</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-6 h-full">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="mb-4">
                    <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                      <Download className="w-12 h-12 text-green-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">点击"添加至 Chrome"</h4>
                    <p className="text-gray-400 text-sm">确认安装权限，扩展将自动添加到浏览器</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-6 h-full">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="mb-4">
                    <div className="w-full h-32 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                      <ArrowLeftRight className="w-12 h-12 text-orange-400" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">开始使用</h4>
                    <p className="text-gray-400 text-sm">访问 Facebook Business Manager，点击扩展图标即可切换界面</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Tutorial */}
          <div className="mb-20" id="video-tutorial">
            <h3 className="text-2xl font-serif font-bold mb-12 text-center">🎬 视频教程</h3>
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-8 shadow-2xl">
                {/* Video Description */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    最新录制
                  </div>
                  <h4 className="text-xl font-semibold mb-2">🚀 完整安装与使用演示</h4>
                  <p className="text-gray-300">跟随视频一步步学习，3分钟掌握 Facebook BM 切换器的所有功能</p>
                </div>

                {/* Video Player */}
                <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-lg" style={{paddingBottom: '56.25%'}}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/XJIazk6_nzo?rel=0&modestbranding=1&playsinline=1"
                    title="Facebook BM 切换器使用教程 - 完整演示"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="text-primary font-semibold">⏱️ 视频时长</div>
                    <div className="text-sm text-gray-300">约3-5分钟</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="text-primary font-semibold">📱 观看设备</div>
                    <div className="text-sm text-gray-300">手机/电脑均可</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-4">
                    <div className="text-primary font-semibold">🎯 学习内容</div>
                    <div className="text-sm text-gray-300">安装+使用全流程</div>
                  </div>
                </div>

                {/* Video Features */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400 mb-3">💡 视频教程特色功能：</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">🔊 中文讲解</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">📺 高清录制</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">⚡ 实时演示</span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs">🎯 零基础适用</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guide */}
          <div className="mb-20">
            <h3 className="text-2xl font-serif font-bold mb-12 text-center">🎯 使用方法</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left - Steps */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">访问 Facebook Business Manager</h4>
                    <p className="text-gray-400">在浏览器中打开 https://business.facebook.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">找到扩展图标</h4>
                    <p className="text-gray-400">在浏览器右上角工具栏中找到橙色的双向箭头图标</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">一键切换界面</h4>
                    <p className="text-gray-400">点击图标即可在新旧界面间快速切换，无需刷新页面</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">确认切换状态</h4>
                    <p className="text-gray-400">扩展会显示当前界面类型，帮您确认切换是否成功</p>
                  </div>
                </div>
              </div>

              {/* Right - Demo */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold mb-4 text-center">💡 演示界面</h4>
                <div className="space-y-4">
                  <div className="bg-white rounded p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-600 text-sm">facebook.com/business</div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                        <div className="text-xs text-gray-600">扩展已激活</div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded p-3 mb-3">
                      <div className="text-sm text-gray-700 mb-2">当前界面：新版 Business Manager</div>
                      <button className="bg-primary text-white px-3 py-1 rounded text-xs">
                        切换到旧版界面
                      </button>
                    </div>
                    <div className="text-xs text-gray-500">✓ 切换完成，无需刷新页面</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-12 text-center">❓ 常见问题</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold mb-3">🔧 扩展无法正常工作？</h4>
                <p className="text-gray-400 text-sm mb-3">请确保：</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Chrome 版本为 88 或以上</li>
                  <li>• 已允许扩展在 Facebook 上运行</li>
                  <li>• 清除浏览器缓存后重试</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold mb-3">🔄 切换后页面显示异常？</h4>
                <p className="text-gray-400 text-sm">这是正常现象，Facebook 需要几秒钟适应界面变化。如持续异常，请刷新页面。</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold mb-3">📱 支持移动设备吗？</h4>
                <p className="text-gray-400 text-sm">目前仅支持桌面版 Chrome 浏览器。移动端支持正在开发中。</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="font-semibold mb-3">🔒 数据安全吗？</h4>
                <p className="text-gray-400 text-sm">扩展仅读取页面结构信息，不收集或存储任何个人数据，完全本地运行。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">技术支持</h2>
            <p className="text-xl text-gray-300">遇到问题？我们随时为您提供帮助</p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Support */}
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">邮件支持</h3>
              <p className="text-gray-400 mb-4">详细描述问题，我们会在24小时内回复</p>
              <div className="text-primary font-medium mb-4">support@bmswitcher.com</div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                24小时内回复
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">在线客服</h3>
              <p className="text-gray-400 mb-4">加入Telegram群组，与开发者和用户实时交流</p>
              <a 
                href="https://t.me/bmswitcher_com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  开始聊天
                </Button>
              </a>
              <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Telegram群组 24/7 在线
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">关于我们</h2>
            <p className="text-xl text-gray-300">致力于提升用户的Facebook Business Manager使用体验</p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Our Mission */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold">我们的使命</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                我们致力于为全球Facebook广告主提供更好的工具体验。通过简化复杂的操作流程，
                让每一位用户都能轻松高效地管理他们的广告业务，专注于创造价值而非技术障碍。
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-serif font-bold">我们的愿景</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                成为全球最受信赖的Facebook Business Manager增强工具提供商，
                通过不断创新和用户反馈，打造更智能、更人性化的广告管理体验。
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold mb-8 text-center">核心价值观</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">高效简洁</h4>
                <p className="text-gray-400 text-sm">
                  每一个功能都经过精心设计，确保用户能够快速完成任务，节省宝贵时间
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">安全可靠</h4>
                <p className="text-gray-400 text-sm">
                  严格的隐私保护，不收集用户数据，所有操作均在本地完成
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2">用户至上</h4>
                <p className="text-gray-400 text-sm">
                  倾听用户声音，持续改进产品，为用户创造真正的价值
                </p>
              </div>
            </div>
          </div>



          {/* Contact Information */}
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-6">联系我们</h3>
            <div className="bg-gray-800 rounded-xl p-8 inline-block">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">邮箱：</span>
                  <a href="mailto:support@bmswitcher.com" className="text-primary hover:underline">
                    support@bmswitcher.com
                  </a>
                </div>
                <div className="hidden md:block w-px h-6 bg-gray-600"></div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">群组：</span>
                  <a 
                    href="https://t.me/bmswitcher_com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @bmswitcher_com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">立即体验高效的界面切换</h2>
          <p className="text-xl text-gray-300 mb-8">加入数万用户的选择，让 Facebook Business Manager 使用更便捷</p>
          <Button size="lg" className="text-xl px-12 py-4 h-16">
            免费安装插件
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <ArrowLeftRight className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif font-bold">Facebook BM 切换器</span>
            </div>
            <div className="text-sm text-gray-400">© 2024 Facebook BM 切换器. 专为提升工作效率而设计.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
