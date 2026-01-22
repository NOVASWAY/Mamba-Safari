import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

const BASE_PATH = '/Mamba-Safari'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 md:pt-20 flex items-center justify-center bg-gradient-to-b from-amber-50/30 via-white to-amber-50/30 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-amber-600 dark:text-amber-400 mb-4">
              404
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-stone-700 dark:text-stone-300 text-lg mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
              >
                <Link href={`${BASE_PATH}/`}>
                  <Home className="mr-2 h-5 w-5" />
                  Go Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/30"
              >
                <Link href={`${BASE_PATH}/gallery/`}>
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  View Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

