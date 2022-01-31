export default function linkedin() {
  return
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'https://www.linkedin.com/in/davidjmagnuson/',
    },
  }
}
