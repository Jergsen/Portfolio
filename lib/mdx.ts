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

export async function getArticleBySlug(slug: string): Promise<{ code: string; frontmatter: Frontmatter } | null> {
  try {
    const decodedSlug = decodeURIComponent(slug)
    const files = fs.readdirSync(ARTICLES_PATH)
    const fileName = files.find(file => file.replace(/\.mdx?$/, '') === decodedSlug)
    
    if (!fileName) {
      console.error(`No file found for slug: ${decodedSlug}`)
      return null
    }

    const articleFilePath = path.join(ARTICLES_PATH, fileName)
    const source = fs.readFileSync(articleFilePath, 'utf8')
    
    const { code, frontmatter } = await bundleMDX({
      source,
      cwd: ARTICLES_PATH,
    })

    return {
      code,
      frontmatter: {
        ...(frontmatter as Frontmatter),
        slug: decodedSlug,
      },
    }
  } catch (error) {
    console.error(`Error reading file for slug ${slug}:`, error);
    return null;
  }
}

export function getAllArticles(): Frontmatter[] {
  try {
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
  } catch (error) {
    console.error('Error reading articles directory:', error);
    return [];
  }
}