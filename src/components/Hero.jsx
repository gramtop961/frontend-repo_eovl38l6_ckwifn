import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-rose-50 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium">New • Fresh reads every week</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Stories, insights, and tutorials for modern builders
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Dive into thoughtfully crafted articles on web development, design systems, AI workflows, and product thinking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#articles" className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800">
                Explore articles <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                About the blog
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100 border border-indigo-200/60 shadow-inner" />
            <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-indigo-200/60 blur-2xl" />
            <div className="absolute -top-8 -right-4 h-24 w-24 rounded-full bg-rose-200/60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
