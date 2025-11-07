import { Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Designing delightful UIs with Tailwind and Radix',
    excerpt: 'A practical guide to building accessible, scalable components with a strong design system foundation.',
    date: 'Nov 5, 2025',
    readTime: '7 min read',
    topic: 'Design Systems',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'From idea to MVP: shipping faster with AI agents',
    excerpt: 'How to pair with AI to accelerate product discovery, prototyping, and iteration—with real examples.',
    date: 'Oct 30, 2025',
    readTime: '6 min read',
    topic: 'AI & Product',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Modern backend patterns with FastAPI and MongoDB',
    excerpt: 'Structure, typing, and pragmatic patterns for building clean, maintainable APIs that scale.',
    date: 'Oct 22, 2025',
    readTime: '8 min read',
    topic: 'Backend',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
  }
]

function PostCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-700 border border-gray-200">{post.topic}</span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
        </div>
      </div>
    </article>
  )
}

export default function FeaturedPosts() {
  return (
    <section id="articles" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured articles</h2>
            <p className="mt-1 text-gray-600">Curated posts worth your time.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">View all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
