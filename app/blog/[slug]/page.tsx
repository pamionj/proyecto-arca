import { notFound } from "next/navigation"
import { getPostBySlug } from "../../../lib/posts"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import type { Metadata } from "next"
import CTA from "../../components/CTA"



interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post no encontrado | Proyecto ARCA",
    }
  }

  return {
    title: `${post.title} | Proyecto ARCA`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  }
}


export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        {post.title}
      </h1>
  
      <div className="relative h-80 mb-6 rounded-xl overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
  
      <p className="text-sm text-gray-500 mb-10">
        {post.date}
      </p>
  
      {/* CONTENEDOR BLANCO DEL POST */}
      <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
      <article className="prose prose-green prose-lg max-w-none text-gray-800 prose-p:my-6 prose-li:my-2 prose-hr:my-10">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </section>
  
      {/* CTA */}
      <div className="mt-16">
        <CTA />
      </div>
    </main>
  )
  
}
