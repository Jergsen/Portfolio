import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import ArticleLayout from './layout'

interface ArticleProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), 'articles')
  const fileNames = fs.readdirSync(articlesDirectory)

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ''),
  }))
}

export default async function ArticlePage({ params }: ArticleProps) {
  const articlesDirectory = path.join(process.cwd(), 'articles')
  const fullPath = path.join(articlesDirectory, `${params.slug}.md`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return (
      <ArticleLayout
        title={data.title}
        date={data.date}
        author={data.author}
        tags={data.tags}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </ArticleLayout>
    )
  } catch (error) {
    notFound()
  }
}