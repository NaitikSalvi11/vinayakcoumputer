import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/src/components/theme-provider"
import Header from "@/src/components/header"
import Footer from "@/src/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinayak Computer - Software Solutions & Computer Parts",
  description:
    "Vinayak Computer provides top-notch software solutions and high-quality computer parts for all your tech needs.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <head>
{/* <script type='text/javascript' src='//filthyrankscuffle.com/4d/fb/cd/4dfbcd7ebd44882954411049660bb136.js'></script> */}
</head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
{/* <script type='text/javascript' src='//pl25953269.effectiveratecpm.com/38/42/8d/38428d7a7bd9a8e0d8738bdf93635186.js'></script>
<script type="text/javascript" src="//filthyrankscuffle.com/b0b056287f7e61dc320b7ff62a6b8741/invoke.js"></script> */}
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5263029045860934"
     crossorigin="anonymous"></script>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'