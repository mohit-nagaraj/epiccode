import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const popularProblems = [
    { name: "Two Sum", slug: "two-sum" },
    { name: "Add Two Numbers", slug: "add-two-numbers" },
    { name: "Longest Substring", slug: "longest-substring-without-repeating-characters" },
    { name: "Median of Two Arrays", slug: "median-of-two-sorted-arrays" },
    { name: "Palindromic Substring", slug: "longest-palindromic-substring" },
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      {/* Simple Header */}
      <header className="w-full max-w-3xl mb-8">
        <h1 className="text-3xl font-bold">
          Fast<span className="text-emerald-400">Code</span>
        </h1>
      </header>

      {/* Hero Section */}
      <div className="max-w-3xl w-full bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-3">Quick access to LeetCode problems</h2>
        <p className="text-gray-300 mb-4">Enter any LeetCode problem slug or try one of our popular problems below.</p>

        <div className="flex gap-2 mb-2">
          <div className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-gray-400">
            fastcode.vercel.app/<span className="text-emerald-400">problem-slug</span>
          </div>
          <Link
            href="/two-sum"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            Try Demo
          </Link>
        </div>
      </div>

      {/* Fun Cards */}
      <div className="max-w-3xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {popularProblems.map((problem) => (
          <Link
            key={problem.slug}
            href={`/${problem.slug}`}
            className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-all flex flex-col"
          >
            <span className="font-medium mb-2">{problem.name}</span>
            <div className="mt-auto flex items-center text-sm text-emerald-400">
              <span>Solve now</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-center text-gray-400 text-sm">
        This is just a fun prank website for demonstration purposes.
      </p>
    </main>
  )
}

