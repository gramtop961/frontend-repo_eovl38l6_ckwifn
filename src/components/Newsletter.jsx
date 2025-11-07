import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-white" id="about">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Stay in the loop</h3>
            <p className="mt-2 text-gray-600">
              Get a monthly roundup with the latest articles, tutorials, and resources. No spam—just value.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-md border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
