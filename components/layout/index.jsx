import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>davidmag{title && ` | ${title}`}</title>
      <meta description="davidmag" />
      <meta author="david magnuson" />
    </Head>

    <main className="w-screen h-screen flex flex-col items-center justify-evenly max-w-5xl m-auto p-4">
      <Nav />
      {children}
    </main>
  </>
)

export default Layout
