"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { validateAndSanitizeFormData } from "@/lib/security"

export function InquirySection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const whatsappLink = "https://wa.me/254115882901?text=Hello%2C%20I%27m%20interested%20in%20booking%20a%20safari"
  const emailAddress = "mambaworldkenyasafaris@gmail.com"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setErrors([])
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const rawName = formData.get("name") as string | null
    const rawEmail = formData.get("email") as string | null
    const rawCountry = formData.get("country") as string | null
    const rawDates = formData.get("dates") as string | null
    const rawMessage = formData.get("message") as string | null

    // Validate and sanitize form data
    const validation = validateAndSanitizeFormData(
      rawName,
      rawEmail,
      rawCountry,
      rawDates,
      rawMessage
    )

    if (!validation.isValid || !validation.data) {
      setErrors(validation.errors)
      setIsLoading(false)
      return
    }

    const { name, email, country, dates, message } = validation.data

    // Create email subject and body (already sanitized)
    const subject = encodeURIComponent(`Safari Inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Country: ${country}\n` +
      `Preferred Travel Dates: ${dates || "Not specified"}\n\n` +
      `Message:\n${message || "No message provided"}`
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
      <section id="inquiry" className="py-16 md:py-24 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-amber-200/5 via-transparent to-orange-200/5"></div>
        <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
          <div className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 rounded-2xl p-8 md:p-12 shadow-2xl animate-scale-in">
            <CheckCircle className="w-20 h-20 text-amber-600 dark:text-amber-400 mx-auto mb-6 animate-bounce-subtle" />
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 dark:text-white mb-4 font-bold">Thank You!</h2>
            <p className="text-stone-700 dark:text-stone-300 mb-8 text-base md:text-lg leading-relaxed">
              Your inquiry has been prepared. Your email client should open with a pre-filled message. 
              If it doesn{"'"}t open automatically, please send your inquiry to{" "}
              <a 
                href={`mailto:${emailAddress}`}
                className="text-amber-700 dark:text-amber-400 hover:underline font-semibold"
              >
                {emailAddress}
              </a>
              . We{"'"}ll get back to you within 24 hours.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 animate-icon-pulse" />
                Chat Now on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="inquiry" className="py-16 md:py-24 bg-gradient-to-b from-white via-amber-50/30 to-white dark:from-stone-950 dark:via-amber-950/10 dark:to-stone-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-amber-200/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-orange-200/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-300 dark:to-amber-400 mb-4 font-bold animate-fade-in-up">
          Start Planning Your Safari
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full mb-6 animate-fade-in"></div>
        <p className="text-stone-700 dark:text-stone-300 text-center max-w-2xl mx-auto mb-12 text-base md:text-lg animate-fade-in-up delay-200">
          Fill out the form below and we{"'"}ll create a personalized itinerary just for you. 
          No obligation, no pressure — just expert advice.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="lg:col-span-3 animate-fade-in-up delay-300">
            <form onSubmit={handleSubmit} className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm border border-amber-200/50 dark:border-amber-800/30 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-stone-700 dark:text-stone-300 font-medium">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John & Jane Smith"
                    required
                    maxLength={100}
                    className="bg-white dark:bg-stone-800 border-amber-200 dark:border-amber-800 focus:border-amber-500 dark:focus:border-amber-500 text-stone-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-stone-700 dark:text-stone-300 font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    className="bg-white dark:bg-stone-800 border-amber-200 dark:border-amber-800 focus:border-amber-500 dark:focus:border-amber-500 text-stone-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-stone-700 dark:text-stone-300 font-medium">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    placeholder="United States"
                    required
                    maxLength={100}
                    className="bg-white dark:bg-stone-800 border-amber-200 dark:border-amber-800 focus:border-amber-500 dark:focus:border-amber-500 text-stone-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dates" className="text-stone-700 dark:text-stone-300 font-medium">Preferred Travel Dates</Label>
                  <Input
                    id="dates"
                    name="dates"
                    placeholder="e.g., July 2025"
                    maxLength={50}
                    className="bg-white dark:bg-stone-800 border-amber-200 dark:border-amber-800 focus:border-amber-500 dark:focus:border-amber-500 text-stone-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-stone-700 dark:text-stone-300 font-medium">Tell Us About Your Dream Safari</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How many travelers? Any specific interests (wildlife, photography, culture)? Special occasions?"
                  rows={4}
                  maxLength={2000}
                  className="bg-white dark:bg-stone-800 border-amber-200 dark:border-amber-800 focus:border-amber-500 dark:focus:border-amber-500 text-stone-900 dark:text-white resize-none"
                />
              </div>

              {errors.length > 0 && (
                <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-800 dark:text-red-300 mb-1">Please fix the following errors:</p>
                      <ul className="text-sm text-red-700 dark:text-red-400 list-disc list-inside space-y-1">
                        {errors.map((error, index) => (
                          <li key={index}>{error}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {isLoading ? "Sending..." : "Send My Inquiry"}
              </Button>

              <p className="text-center text-sm text-stone-600 dark:text-stone-400 mt-4">
                We respond within 24 hours. No obligation.
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center animate-fade-in-up delay-500">
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-2xl p-6 md:p-8 text-center shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
              <MessageCircle className="w-14 h-14 mx-auto mb-4 animate-icon-float" />
              <h3 className="font-serif text-2xl mb-3 font-bold">Prefer to Chat?</h3>
              <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed">
                Get instant answers to your questions. Our team is ready to help you plan the perfect safari.
              </p>
              <Button
                asChild
                variant="secondary"
                className="w-full bg-white text-amber-700 hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
