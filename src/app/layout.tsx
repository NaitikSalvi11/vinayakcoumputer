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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
<script type='text/javascript' src='//pl25953269.effectiveratecpm.com/38/42/8d/38428d7a7bd9a8e0d8738bdf93635186.js'></script>
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'