import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    title: "Software Sales",
    description: "We offer a wide range of software solutions for businesses and individuals.",
    icon: "💻",
  },
  {
    title: "Support Services",
    description: "Our expert team provides top-notch support for all your software needs.",
    icon: "🛠️",
  },
  {
    title: "Computer Parts Sales",
    description: "High-quality computer components for building and upgrading your systems.",
    icon: "🖥️",
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-4xl mr-4">{service.icon}</span>
                {service.title}
              </CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

