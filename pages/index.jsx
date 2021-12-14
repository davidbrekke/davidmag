import Layout from '@components/layout'

export default function App() {
  return (
    <Layout>
      <header className="flex flex-col space-y-4 text-5xl items-center">
        <span className="text-gray-500 text-6xl">hi, i'm</span>
        <h1 className="text-purple-800">david magnuson</h1>
        <h3 className="text-gray-600 text-xl pt-2">
          davidjamesmagnuson@gmail.com
        </h3>
      </header>
    </Layout>
  )
}
