import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-900 text-white font-bold">B</span>
              <span className="font-semibold">BlueBlog</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Writing about code, design, and the craft of building products.</p>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" aria-label="Twitter" className="hover:text-gray-900"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-900"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="hover:text-gray-900"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="mt-6 text-xs text-gray-400 text-center sm:text-left">© {new Date().getFullYear()} BlueBlog. All rights reserved.</p>
      </div>
    </footer>
  )
}
