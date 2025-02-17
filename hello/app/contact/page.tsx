import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We'd love to hear from you. Please feel free to contact us with any questions or inquiries.
          </p>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Address</h3>
            <p>123 Tech Street, Silicon Valley, CA 94000</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Email</h3>
            <p>info@vinayakcomputer.com</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">{/* Add social media icons/links here */}</div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        {/* Add Google Map integration here */}
        <div className="h-96 bg-gray-200 rounded-lg">{/* Placeholder for Google Map */}</div>
      </div>
    </div>
  )
}

