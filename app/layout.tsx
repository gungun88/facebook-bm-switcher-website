import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Facebook BM 切换器 - 一键切换新旧界面 | Chrome 扩展",
  description: "Facebook Business Manager 界面切换器，一键切换新旧界面，提升工作效率。专为中国用户优化，支持全中文界面显示。免费下载，支持 Chrome 88+ 版本。",
  keywords: ["Facebook", "Business Manager", "界面切换", "Chrome扩展", "效率工具", "中文界面", "BM切换器"],
  authors: [{ name: "Facebook BM 切换器团队" }],
  creator: "Facebook BM 切换器",
  publisher: "Facebook BM 切换器",
  robots: "index, follow",
  openGraph: {
    title: "Facebook BM 切换器 - 一键切换新旧界面",
    description: "专为中国用户优化的 Facebook Business Manager 界面切换器，一键切换新旧界面，提升工作效率。",
    url: "https://bmswitcher.com",
    siteName: "Facebook BM 切换器",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Facebook BM 切换器 - 一键切换新旧界面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook BM 切换器 - 一键切换新旧界面",
    description: "专为中国用户优化的 Facebook Business Manager 界面切换器",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ea580c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
