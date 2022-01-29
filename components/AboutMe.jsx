const AboutMe = () => (
  <>
    <Education />
    <Interests />
    <Learning />
    <Passion />
  </>
)

export default AboutMe

const Learning = () => (
  <p className="text-gray-500 text-2xl">
    currently, i am learning{' '}
    <Link href="https://soliditylang.org/">solidity</Link> & the{' '}
    <Link href="https://ethereum.org/en/developers/docs/evm/">
      ethereum virtual machine (EVM)
    </Link>
    {` as well as other 'web3'
    technologies such as `}
    <Link href="https://ipfs.io/">ipfs</Link>,{' '}
    <Link href="https://thegraph.com/en/">graph protocol</Link>,{' '}
    <Link href="https://ethereum.org/en/developers/docs/oracles/">oracles</Link>
    {' & '}
    <Link href="https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/">
      rollups
    </Link>
  </p>
)

const Education = () => (
  <p className="text-gray-500 text-2xl">
    i am a recent software engineering graduate from{' '}
    <Link href="https://dunwoody.edu/">dunwoody college of technology</Link>
  </p>
)

const Interests = () => (
  <p className="text-gray-500 text-2xl">
    {`i am interested in full stack engineering, front-end architecture,
      blockchain & smart contracts, machine learning & data science,
      agricultural iot, 'smart homes' and basically anything related to
      technology & software`}
  </p>
)

const Passion = () => (
  <p className="text-gray-500 text-2xl">
    my main passion & goal is to expand the reach of technology to the world
    community so that everybody can benefit from the opportunities that
    technology makes possible
  </p>
)

const Link = ({ href, underline = true, children }) => (
  <a href={href} target="_blank" className={underline && 'underline'}>
    {children}
  </a>
)
