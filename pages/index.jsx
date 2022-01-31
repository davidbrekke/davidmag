import Layout from '@components/layout'
import AboutMe from '@components/AboutMe'
import Connect from '@components/Connect'
import Animate from '@components/Animate'

export default function App() {
  return (
    <Layout>
      <Animate>
        <div className="flex flex-col space-y-4 items-center text-center">
          <span className="text-gray-500 text-4xl">{`hi i'm`}</span>
          <h1 className="text-purple-600 text-6xl">
            <strong>david magnuson</strong>
          </h1>
          <AboutMe />
          <Connect />
        </div>
      </Animate>
    </Layout>
  )
}
