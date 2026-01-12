import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/posts")

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      cover: data.cover as string,
    }
  })
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    cover: data.cover as string,
  }
}
