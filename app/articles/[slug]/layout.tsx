import React from 'react'

interface ArticleLayoutProps {
  title: string
  date: string
  author?: string
  tags?: string[]
  children: React.ReactNode
}

export default function ArticleLayout({ title, date, author, tags, children }: ArticleLayoutProps) {
  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <div className="text-gray-600 mb-2">
          {new Date(date).toLocaleDateString()} {author && `by ${author}`}
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose lg:prose-xl">{children}</div>
    </article>
  )
}