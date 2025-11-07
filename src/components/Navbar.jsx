import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-bold">B</span>
            <span className="text-xl font-semibold tracking-tight">BlueBlog</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#articles" className="hover:text-gray-900">Articles</a>
            <a href="#topics" className="hover:text-gray-900">Topics</a>
            <a href="#about" className="hover:text-gray-900">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-56 rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2 pt-4 text-sm text-gray-700">
              <a href="#home" className="px-2 py-1 rounded hover:bg-gray-50">Home</a>
              <a href="#articles" className="px-2 py-1 rounded hover:bg-gray-50">Articles</a>
              <a href="#topics" className="px-2 py-1 rounded hover:bg-gray-50">Topics</a>
              <a href="#about" className="px-2 py-1 rounded hover:bg-gray-50">About</a>
            </nav>
            <div className="mt-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
