export default function twitter() {
  return
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://twitter.com/d_mgnsn',
    },
  }
}
