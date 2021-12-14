export default function react() {
  return
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://davidbrekke.github.io/react-demo/',
    },
  }
}
