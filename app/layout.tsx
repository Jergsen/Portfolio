import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Freelance Developer Portfolio',
  description: 'Portfolio of an AI-focused freelance developer showcasing skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <span className="text-xl font-bold">AI Dev Portfolio</span>
            <ul className="flex space-x-4">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/articles" className="hover:text-gray-300">Articles</a></li>
              <li><a href="/articles/create" className="hover:text-gray-300">Write Article</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white p-4 mt-12">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 AI Freelance Developer. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
