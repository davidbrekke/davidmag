import Link from 'next/link'
const NavModalLink = ({ title, url }) => (
  <Link href={url}>
    <a
      target="_blank"
      className="hover:text-indigo-400 cursor-pointer transition"
    >
      {title}
    </a>
  </Link>
)

export default NavModalLink
