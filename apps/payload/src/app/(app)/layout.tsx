import type { Metadata } from 'next'
import type { FC, PropsWithChildren, ReactNode } from 'react'

import '@local/ui/styles.css'
import './globals.css'

export const metadata: Metadata = {
  description:
    'Boilerplate for creating a new Payload project using Next.js and TypeScript.',
  title: {
    default: '',
    template: '%s | Payload Monorepo Template',
  },
}

export type RootLayoutProps = PropsWithChildren<{
  footer?: ReactNode
  head?: ReactNode
  header?: ReactNode
}>

const Root: FC<RootLayoutProps> = ({ children, footer, head, header }) => {
  return (
    <html className="h-screen" lang="en">
      <head>{head}</head>
      <body className="flex min-h-screen flex-col bg-gray-300">
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}

export default Root
