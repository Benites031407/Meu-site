"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

// Highlight data
const highlights = [
  {
    id: 1,
    title: "Mountain Retreat",
    description:
      "Experience the serenity of our mountain retreat, where you can disconnect from the world and reconnect with nature. Nestled among towering pines with breathtaking views, this location offers hiking trails, wildlife spotting, and peaceful meditation spots.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: 2,
    title: "Coastal Paradise",
    description:
      "Our coastal paradise offers pristine beaches, crystal-clear waters, and stunning sunsets. Perfect for water sports enthusiasts or those simply looking to relax by the shore. Explore hidden coves, go snorkeling among vibrant coral reefs, or enjoy beachside dining.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: 3,
    title: "Urban Adventure",
    description:
      "Dive into the heart of the city with our urban adventure package. Experience the vibrant culture, world-class dining, and historic landmarks. Our guided tours take you through hidden gems and popular attractions alike, giving you the authentic local experience.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    id: 4,
    title: "Desert Expedition",
    description:
      "Embark on an unforgettable journey through golden dunes and ancient landscapes. Our desert expedition combines adventure with luxury, offering camel treks by day and stargazing from luxury camps by night. Experience the magic of desert silence and breathtaking sunrises.",
    image: "/placeholder.svg?height=600&width=1200",
  },
]

export default function HighlightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSlideChange = (index: number) => {
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="space-y-12">
      <div className="relative overflow-hidden rounded-xl shadow-xl">
        <Carousel className="w-full" onSelect={(event) => handleSlideChange(Number(event.currentTarget.dataset.index))}>
          <CarouselContent>
            {highlights.map((highlight, index) => (
              <CarouselItem key={highlight.id}>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-3xl font-bold">{highlight.title}</h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.id}
            className={cn(
              "cursor-pointer rounded-lg border p-4 transition-all duration-300",
              activeIndex === index ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/50",
            )}
            onClick={() => handleSlideChange(index)}
          >
            <div className="mb-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full bg-primary transition-all duration-500",
                  activeIndex === index ? "w-full" : "w-0",
                )}
              />
            </div>
            <h3 className="mb-2 font-semibold">{highlight.title}</h3>
            <div
              className={cn(
                "transition-opacity duration-500",
                activeIndex === index && !isAnimating ? "opacity-100" : "opacity-70",
              )}
            >
              <p className="line-clamp-3 text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-card p-6 shadow-md animate-fade-in-up">
        <div
          className={cn(
            "transition-all duration-500",
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
          )}
        >
          <h2 className="mb-4 text-2xl font-bold">{highlights[activeIndex].title}</h2>
          <p className="text-muted-foreground">{highlights[activeIndex].description}</p>
          <Button className="mt-4">Learn More</Button>
        </div>
      </div>
    </div>
  )
}

