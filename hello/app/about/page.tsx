import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">About Vinayak Computer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/placeholder.svg" alt="Vinayak Computer Team" width={600} height={400} className="rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            At Vinayak Computer, we strive to provide cutting-edge software solutions and high-quality computer parts to
            empower businesses and individuals in the digital age. Our mission is to deliver exceptional products and
            services that enhance productivity, efficiency, and technological advancement for our clients.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p>
            Our team consists of passionate tech enthusiasts, experienced software developers, and knowledgeable
            hardware specialists. Together, we work tirelessly to ensure that our customers receive the best products
            and support in the industry.
          </p>
        </div>
      </div>
    </div>
  )
}

