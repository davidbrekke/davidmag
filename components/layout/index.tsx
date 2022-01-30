import Head from 'next/head'

import Nav from '@components/layout/nav'

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>davidmag{title && ` | ${title}`}</title>
    </Head>
    <Main>
      <Nav />
      {children}
    </Main>
  </>
)

export default Layout

const Background = ({ children }) => (
  <div className="min-w-screen min-h-screen bg-gradient-to-tr from-indigo-300 via-red-200 to-blue-200">
    {children}
  </div>
)

const Main = ({ children }) => (
  <Background>
    <main className="min-w-screen min-h-screen flex flex-col scroll items-center justify-evenly max-w-5xl m-auto p-4">
      {children}
    </main>
  </Background>
)
