import React from 'react'

interface ArticleLayoutProps {
  children: React.ReactNode
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {children}
    </div>
  )
}