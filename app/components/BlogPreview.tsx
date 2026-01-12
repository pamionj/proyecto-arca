import Link from "next/link"
import { getAllPosts } from "../../lib/posts"
import BlogCard from "./BlogCard"

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 2)

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-green-700">
          Últimas publicaciones
        </h2>

        <Link
          href="/blog"
          className="text-green-600 font-medium hover:underline"
        >
          Ver blog →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            slug={post.slug}
            cover={post.cover}
          />
        ))}
      </div>
    </section>
  )
}
