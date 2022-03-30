import Divider from '@components/Divider'
const AboutMe = () => (
  <>
    <Divider />
    <Education />
    <Divider />
    <Skills />
    <Divider />
    <Currently />
    <Divider />
    <Interests />
    <Divider />
    <Passion />
    <Divider />
  </>
)

export default AboutMe

const Currently = () => (
  <div className="flex flex-col items-center text-gray-500 text-2xl">
    <p className="font-bold text-3xl">currently</p>
    <div className="flex flex-col">
      <p className="text-2xl">
        <i>building</i> <Link href="https://2loud.xyz">2loud.xyz</Link>
        <p className="text-lg">audio file sharing social application</p>
        <p className="text-lg">
          built with nextjs, typescript, tailwind & supabase
        </p>
      </p>
      <Divider min />
      <p className="text-2xl">
        <i>learning</i> typescript, solidity & the ethereum virtual machine
        (EVM)
      </p>
      <p className="text-lg">
        & other web3 technologies such as ipfs, graph protocol, oracles &
        rollups
      </p>
    </div>
  </div>
)

const Skills = () => (
  <div className="flex flex-col items-center text-gray-500 text-2xl">
    <p className="font-bold text-3xl">skills & knowledge</p>
    <div className="flex flex-col text-2xl">
      <p>javascript & python</p>
      <p className="text-xl">typescript, solidity, swift, java, c#</p>
      <Divider min />
      <p className="text-2xl">reactjs, nextjs, nodejs, flask</p>
      <Divider min />
      <p>rest, graphql, aws, azure, sql, mongo, orm</p>
      <Divider min />
      <p>css, css in js, utility classes (tailwind)</p>
      <Divider min />
      <p>ethersjs, web3js, hardhat, truffle</p>
      <Divider min />
      <p>git, figma, ui/ux design, tdd</p>
    </div>
  </div>
)

const Education = () => (
  <div className="flex flex-col items-center text-gray-500 text-3xl">
    <p className="font-bold text-4xl">software engineer</p>
    <p className="text-gray-500 text-xl">
      fall 2021 graduate of{' '}
      <Link href="https://dunwoody.edu/">dunwoody college of technology</Link>
    </p>
    <p className="text-gray-500 text-lg">
      <Link href="https://catalog.dunwoody.edu/catalog-student-handbook/academic-programs/engineering/software-engineering-seng-bachelor-science/#text">
        bachelor of science in software engineering
      </Link>
    </p>
  </div>
)

const Interests = () => (
  <div className="flex flex-col items-center text-gray-500 text-2xl">
    <p className="font-bold text-3xl">interests</p>
    <p className="text-gray-500 text-2xl">
      {`full stack engineering, front-end architecture,
      blockchain & smart contracts, machine learning & data science, ui/ux design,
      agricultural iot, 'smart homes' and basically anything related to
      technology & software`}
    </p>
  </div>
)

const Passion = () => (
  <div className="flex flex-col items-center text-gray-500 text-2xl">
    <p className="font-bold text-3xl">passion</p>
    <p className="text-gray-500 text-2xl">
      my main passion & goal is to expand the reach of technology to the world
      community so that everybody can benefit from the opportunities that
      technology makes possible
    </p>
  </div>
)

const Link = ({ href, underline = true, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={underline && 'underline'}
  >
    {children}
  </a>
)
