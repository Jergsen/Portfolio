import Link from 'next/link'
import { getAllArticles } from '../../lib/mdx'

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.slug} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <Link href={`/articles/${encodeURIComponent(article.slug)}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}