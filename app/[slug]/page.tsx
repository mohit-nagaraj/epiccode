"use client"

import { useEffect, useState } from "react"
import { Clock, ArrowRight } from "lucide-react"

export default function RedirectPage({ params }: { params: { slug: string } }) {
  const [countdown, setCountdown] = useState(45)
  const [countdownComplete, setCountdownComplete] = useState(false)
  const { slug } = params

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      setCountdownComplete(true)
      // Try to redirect, but don't rely solely on this
      try {
        window.location.href = `https://leetcode.com/problems/${slug}`
      } catch (error) {
        console.error("Automatic redirect failed:", error)
        // The fallback button will handle this case
      }
    }
  }, [countdown, slug])

  // Add a manual redirect function
  const handleManualRedirect = () => {
    window.location.href = `https://leetcode.com/problems/${slug}`
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-3xl w-full bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">
              Fast<span className="text-emerald-400">Code</span>
            </h1>
            <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
              <Clock className="h-5 w-5 text-emerald-400" />
              <span className="font-mono text-lg">
                Redirecting in <span className="text-emerald-400 font-bold">{countdown}</span> seconds
              </span>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-black/30 mb-6">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/mLUyRd9SmQw?si=_jS9I6xg9G3REQy5&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-2">You will be redirected to:</p>
            <div className="bg-gray-700/50 p-3 rounded-lg font-mono text-emerald-300 break-all">
              leetcode.com/problems/{slug}
            </div>

            {countdownComplete && (
              <div className="mt-4">
                <button
                  onClick={handleManualRedirect}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 mx-auto transition-all transform hover:scale-105 animate-pulse"
                >
                  Click to Redirect Now <ArrowRight className="h-5 w-5" />
                </button>
                <p className="mt-2 text-amber-400 text-sm">Automatic redirect may have been blocked by your browser</p>
              </div>
            )}

            <p className="mt-6 text-gray-400 text-sm">This is just a prank! Enjoy the video while you wait.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

