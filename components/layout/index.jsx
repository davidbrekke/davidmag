import Head from 'next/head'
import Nav from './nav'

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>davidmag{title && ` | ${title}`}</title>
      <meta description="davidmag" />
      <meta author="david magnuson" />
    </Head>

    <main className="min-w-screen min-h-screen flex flex-col scroll items-center justify-evenly max-w-5xl m-auto p-4">
      <Nav />
      {children}
    </main>
  </>
)

export default Layout
