import { useState } from 'react'
import Link from 'next/link'
import { MenuAlt3Icon } from '@heroicons/react/solid'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { url: 'mailto:davidjamesmagnuson@gmail.com', title: 'email' },
    { url: 'https://github.com/davidbrekke', title: 'github' },
    { url: 'https://mirror.xyz/0xBc08269F39757bd007815288D2717fFd77F75B77', title: 'mirror' },
    { url: 'https://twitter.com/d_mgnsn', title: 'twitter' },
    { url: 'https://www.instagram.com/david_magnuson/', title: 'instagram' },
    // { url: '/react', title: 'react' },
    // { url: '/blog', title: 'blog' },
    // { url: '/contact', title: 'contact' },
  ]

  return (
    <>
      <MenuAlt3Icon
        className="absolute h-14 top-4 right-4 py-2 px-4 shadow rounded-lg text-gray-500 hover:text-indigo-400 hover:shadow-lg transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`${
          !isOpen && 'hidden'
        } flex flex-col items-center absolute text-2xl text-gray-500 top-24 bg-white right-6 py-2 px-4 shadow rounded-lg hover:shadow-lg transition`}
      >
        {navItems.map(({ title, url }, i) => (
          <Link href={url} key={i}>
            <a target="_blank" className="hover:text-indigo-400 cursor-pointer transition">
              {title}
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Nav
