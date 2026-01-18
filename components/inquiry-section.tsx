"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, CheckCircle } from "lucide-react"

export function InquirySection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"
  const emailAddress = "mambaworldkenyasafaris@gmail.com"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const country = formData.get("country") as string
    const dates = formData.get("dates") as string
    const message = formData.get("message") as string

    // Create email subject and body
    const subject = encodeURIComponent(`Safari Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Country: ${country}\n` +
      `Preferred Travel Dates: ${dates || "Not specified"}\n\n` +
      `Message:\n${message}`
    )

    // Open email client with pre-filled form
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
    
    // Small delay to ensure email client opens, then show success
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="inquiry" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-card border border-border rounded-lg p-12">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-serif text-3xl text-foreground mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your inquiry has been prepared. Your email client should open with a pre-filled message. 
              If it doesn{"'"}t open automatically, please send your inquiry to{" "}
              <a 
                href={`mailto:${emailAddress}`}
                className="text-primary hover:underline font-medium"
              >
                {emailAddress}
              </a>
              . We{"'"}ll get back to you within 24 hours.
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat Now on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="inquiry" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          Start Planning Your Safari
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Fill out the form below and we{"'"}ll create a personalized itinerary just for you. 
          No obligation, no pressure — just expert advice.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John & Jane Smith"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="United States"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dates">Preferred Travel Dates</Label>
                  <Input
                    id="dates"
                    name="dates"
                    placeholder="e.g., July 2025"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Tell Us About Your Dream Safari</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How many travelers? Any specific interests (wildlife, photography, culture)? Special occasions?"
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6"
              >
                {isLoading ? "Sending..." : "Send My Inquiry"}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                We respond within 24 hours. No obligation.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-primary text-primary-foreground rounded-lg p-6 md:p-8 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-serif text-xl mb-3">Prefer to Chat?</h3>
              <p className="text-primary-foreground/90 mb-6 text-sm">
                Get instant answers to your questions. Our team is ready to help you plan the perfect safari.
              </p>
              <Button
                asChild
                variant="secondary"
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
