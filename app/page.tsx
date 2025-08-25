"use client"

import { useState, useEffect } from "react"
import { Chrome, Users, Star, Download, Menu, X, ArrowLeftRight, RefreshCw, ToggleLeft } from "lucide-react"
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
      <header className="border-b border-gray-800">
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
              <a href="#features" className="hover:text-primary transition-colors">
                功能特点
              </a>
              <a href="#tutorial" className="hover:text-primary transition-colors">
                使用教程
              </a>
              <a href="#support" className="hover:text-primary transition-colors">
                技术支持
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
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
                <a href="#features" className="hover:text-primary transition-colors">
                  功能特点
                </a>
                <a href="#tutorial" className="hover:text-primary transition-colors">
                  使用教程
                </a>
                <a href="#support" className="hover:text-primary transition-colors">
                  技术支持
                </a>
                <a href="#about" className="hover:text-primary transition-colors">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Facebook Business Manager
            <span className="block text-primary">界面切换器</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            一键切换新旧界面，提升工作效率。专为中国用户优化，支持全中文界面显示。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-xl px-10 py-4 h-14">
              立即安装
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-10 py-4 h-14 bg-transparent">
              查看教程
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
