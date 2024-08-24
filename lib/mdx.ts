import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const ARTICLES_PATH = path.join(process.cwd(), 'articles')

export interface Frontmatter {
  title: string;
  date: string;
  author?: string;
  tags?: string[];
  slug: string;
  [key: string]: any;
}

export async function getArticleBySlug(slug: string): Promise<{ code: string; frontmatter: Frontmatter }> {
  const articleFilePath = path.join(ARTICLES_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(articleFilePath, 'utf8')
  
  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: ARTICLES_PATH,
  })

  return {
    code,
    frontmatter: {
      ...(frontmatter as Frontmatter),
    },
  }
}

export function getAllArticles(): Frontmatter[] {
  const articles = fs.readdirSync(ARTICLES_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = fs.readFileSync(path.join(ARTICLES_PATH, fileName), 'utf8')
      const { data } = matter(source)
      return {
        ...(data as Frontmatter),
        slug: fileName.replace(/\.mdx?$/, ''),
      }
    })

  return articles.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}