"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center gradient-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-2xl font-semibold mb-6 gradient-text">Get in Touch</h2>
        <p className="mb-6 text-muted-foreground">
          We'd love to hear from you. Please feel free to contact us with any questions or inquiries.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <MapPin className="mr-4 text-primary" />
            <p>123 Tech Street, Silicon Valley, CA 94000</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-4 text-primary" />
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-4 text-primary" />
            <p>info@vinayakcomputer.com</p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 gradient-text">Business Hours</h2>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 gradient-text">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Experienced and skilled professionals</li>
            <li>High-quality software and hardware solutions</li>
            <li>Reliable customer support</li>
            <li>Affordable pricing with no hidden costs</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
