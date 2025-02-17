"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Welcome to Vinayak Computer</h1>
          <p className="text-xl mb-8">Your one-stop solution for software and computer parts</p>
          <Link href="/services">
            <Button size="lg">Explore Our Services</Button>
          </Link>
        </motion.div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{/* Add featured products/services here */}</div>
      </section>

      <section className="py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{/* Add testimonials here */}</div>
      </section>
    </div>
  )
}

