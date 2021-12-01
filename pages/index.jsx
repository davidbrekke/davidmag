import Layout from '@components/layout'

export default function App({}) {
  return (
    <Layout>
      <header className="flex flex-col text-5xl items-center">
        <h1 className="text-purple-800">david</h1>
        <h2 className="text-gray-700">magnuson</h2>
        <h3 className="text-gray-600 text-xl pt-2">
          davidjamesmagnuson@gmail.com
        </h3>
      </header>
    </Layout>
  )
}

// export async function getServerSideProps({ params, req, res }) {
//   return {
//     props: {},
//   }
// }
