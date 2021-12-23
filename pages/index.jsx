import Layout from '@components/layout'
import EthBlock from '@components/ethBlock'

export default function App() {
  return (
    <Layout>
      <header className="flex flex-col space-y-4  items-center">
        <span className="text-gray-500 text-5xl">hi, i'm</span>
        <h1 className="text-purple-600 text-6xl">
          <strong>david magnuson</strong>
        </h1>
        <h3 className="text-gray-600 text-xl pt-2">
          davidjamesmagnuson@gmail.com
        </h3>
        <EthBlock />
      </header>
    </Layout>
  )
}
