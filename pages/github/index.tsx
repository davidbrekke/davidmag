export default function github() {
  return
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://github.com/davidbrekke',
    },
  }
}
