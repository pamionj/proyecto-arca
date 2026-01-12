import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  cover: string
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
  cover,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer">
        <div className="relative h-48">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            {date}
          </p>
          <p className="text-gray-700 text-sm">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  )
}

