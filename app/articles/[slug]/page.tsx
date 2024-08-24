import { getMDXComponent } from 'mdx-bundler/client'
import { getArticleBySlug, getAllArticles, Frontmatter } from '../../../lib/mdx'

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const { code, frontmatter } = await getArticleBySlug(params.slug)
  const Component = getMDXComponent(code)

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
        <div className="text-gray-600 mb-2">
          {new Date(frontmatter.date).toLocaleDateString()} 
          {frontmatter.author && ` by ${frontmatter.author}`}
        </div>
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag: string) => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose lg:prose-xl">
        <Component />
      </div>
    </article>
  )
}