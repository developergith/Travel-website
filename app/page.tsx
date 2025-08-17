"use client"
import Image from "next/image"
import { Star } from "lucide-react"
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


import {
  Search,
  MapPin,
  Calendar,
  DollarSign,
  
  Shield,
  Headphones,
  Package,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "Beautiful white buildings and stunning sunsets",
    price: "$1,299",
    images: [
      "/sunset-oia-santorini.jpg?height=300&width=400",
      "/Santorini1.avif?height=300&width=400",
      "/Santorini2.avif?height=300&width=400",
      "/Santorini3.avif?height=300&width=400",
      "/Santorini4.avif?height=300&width=400",
    ],
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    description: "Tropical paradise with rice terraces and temples",
    price: "$899",
    images: [
      "/q2f35h11q9z31.jpg?height=500&width=500",
      "/Bali1.avif?height=300&width=400",
      "/Bali2.avif?height=300&width=400",
      "/Bali3.avif?height=300&width=400",
      "/Bali4.avif?height=300&width=400",
      "/Bali5.avif?height=300&width=400",
    ],
  },
  {
    id: 3,
    name: "tokyo, japan",
    description: "The bustling metropolis known for its modern architecture and vibrant culture",
    price: "$1,199",
    images: [
      "/tokio2.jpg?height=500&width=500",
      "/Tokio1.jpg?height=300&width=400",
      "/tokio3.jpg?height=300&width=400",
      "/tokio4.jpg?height=300&width=400",

    ],
  },
  {
    id: 4,
    name: "Paris, France",
    description: "City of love with iconic landmarks and cafes",
    price: "$1,199",
    images: [
      "/Paris, France1.avif?height=500&width=500",
      "/Paris, France2.webp?height=300&width=400",
      "/Paris, France3.avif?height=300&width=400",

    ],
  },
  {
    id: 5,
    name: "Maldives",
    description: "Crystal clear waters and overwater bungalows",
    price: "$2,299",
    images: [
      "/Maldives1.jpg?height=500&width=500",
      "/Maldives2.jpg?height=300&width=400",
      "/Maldives3.jpg?height=300&width=400",
    ],
  },
  {
    id: 6,
    name: "New York, USA",
    description: "The city that never sleeps with endless attractions",
    price: "$1,099",
    images: [
      "/New York, USA1.avif?height=500&width=500",
      "/New York, USA2.jpg?height=300&width=400",
      "/New York, USA4.jpg?height=300&width=400",
    ],
  },
]

const features = [
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Best deals and competitive prices for all destinations",
  },
  {
    icon: Shield,
    title: "Best Guides",
    description: "Expert local guides to make your trip unforgettable",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support for peace of mind",
  },
  {
    icon: Package,
    title: "Custom Packages",
    description: "Tailored travel packages to suit your preferences",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    review: "Amazing experience! The trip to Santorini was perfectly organized and exceeded all expectations.",
    image: "/Sarah-Johnson1.jpg",
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    review: "Professional service and great value for money. Will definitely book again!",
    image: "/Mike Chen.jpg?height=60&width=60",
  },
  {
    id: 3,
    name: "Emma Davis",
    rating: 5,
    review: "The custom package for our family trip to Bali was perfect. Highly recommended!",
    image: "/Emma Davis.webp?height=60&width=60",
  },
]

export default function TravelWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const [globeAnim, setGlobeAnim] = useState(null);

  // Globe JSON ko fetch karo public/ se
  useEffect(() => {
    fetch("/globe.json")
      .then((res) => res.json())
      .then((data) => setGlobeAnim(data));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/world.webp?height=1080&width=1920')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-6 overflow-hidden">

            {/* Globe Animation */}
            <div className="w-40 h-40">
              {globeAnim && <Lottie animationData={globeAnim} loop={true} />}
            </div>

            {/* Marquee + Color Changing Text */}
            <motion.h1
              animate={{
                x: ["0%", "-50%"],
                color: ["#901fc9ff", "#49bac0ff", "#4d4dff", "#ffcc00", "#ff4d4d"]
              }}
              transition={{
                x: { duration: 5, repeat: Infinity, ease: "linear" },
                color: { duration: 10, repeat: Infinity, ease: "linear" }
              }}
              className="text-5xl md:text-7xl font-bold whitespace-nowrap"
            >
              🌍 Explore The World With Us 🌍 Explore The World With Us 🌍 Explore The World With Us
            </motion.h1>

            <motion.h2
              animate={{
                x: ["0%", "-100%"],
                color: ["#ff4d4d", "#4dff4d", "#4d4dff", "#ffcc00", "#ff4d4d"]
              }}
              transition={{
                x: { duration: 10, repeat: Infinity, ease: "linear" },
                color: { duration: 5, repeat: Infinity, ease: "linear" }
              }}
            >
              Discover amazing destinations and create unforgettable memories
            </motion.h2>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Destination
                </label>
                <Input placeholder="Where to?" className="bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Date
                </label>
                <Input type="date" className="bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Budget
                </label>
                <Input placeholder="$1000" className="bg-white" />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Popular Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most sought-after travel destinations around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">

                    {/* Image Slider Section */}
                    <div className="relative w-full h-64">
                      <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={10}
                        slidesPerView={1}
                        className="h-full rounded-xl"
                      >
                        {destination.images?.map((img, i) => (
                          <SwiperSlide key={i}>
                            <img
                              src={img}
                              alt={`${destination.name} ${i}`}
                              className="w-full h-64 object-cover rounded-xl"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      {/* Price Tag */}
                      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold z-10">
                        {destination.price}
                      </div>
                    </div>

                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {destination.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{destination.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional travel experiences with unmatched service quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-muted-foreground">Real experiences from our satisfied customers</p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 text-center border-0 shadow-lg">
                <CardContent className="p-0">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mb-4 italic">
                    "{testimonials[currentTestimonial].review}"
                  </p>
                  <h4 className="text-xl font-bold text-card-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                </CardContent>
              </Card>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar text-sidebar-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TravelWorld</h3>
              <p className="text-muted-foreground">
                Your trusted partner for unforgettable travel experiences around the globe.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-sidebar-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-sidebar-foreground transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-sidebar-foreground transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-sidebar-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-sidebar-foreground transition-colors">
                    Europe
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-sidebar-foreground transition-colors">
                    Asia
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-sidebar-foreground transition-colors">
                    Americas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-sidebar-foreground transition-colors">
                    Africa
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-sidebar-accent transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-sidebar-accent transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-sidebar-accent transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-sidebar-accent transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-sidebar-border pt-8 text-center">
            <p className="text-muted-foreground">© 2025 TravelWorld. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
