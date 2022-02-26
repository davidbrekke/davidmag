import Layout from '@components/layout'
import AboutMe from '@components/AboutMe'
import Connect from '@components/Connect'

export default function App() {
  return (
    <Layout>
      <div className="flex flex-col space-y-4 items-center text-center">
        <span className="text-gray-500 text-4xl">{`hi i'm`}</span>
        <h1 className="text-purple-600 text-6xl">
          <strong>david j magnuson</strong>
        </h1>
        <AboutMe />
        <Connect />
      </div>
    </Layout>
  )
}
