import { getAllPosts } from "../../lib/posts"
import BlogCard from "../components/BlogCard"

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-green-700 mb-10">
        Blog Proyecto ARCA
      </h1>

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
