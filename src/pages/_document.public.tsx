import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='w-scrren h-screen bg-white text-zinc-950 dark:bg-zinc-900 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
