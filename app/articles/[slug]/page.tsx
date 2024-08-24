import { getMDXComponent } from 'mdx-bundler/client'
import { getArticleBySlug, getAllArticles, Frontmatter } from '../../../lib/mdx'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const articles = getAllArticles()
  console.log('Generated static params:', articles.map(article => ({ slug: article.slug })))
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  console.log('Attempting to render article with slug:', params.slug)
  try {
    const article = await getArticleBySlug(params.slug)
    
    if (!article) {
      console.log('Article not found for slug:', params.slug)
      notFound()
    }

    console.log('Article found:', article.frontmatter.title)
    const { code, frontmatter } = article
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
  } catch (error) {
    console.error(`Error rendering article for slug ${params.slug}:`, error);
    notFound()
  }
}