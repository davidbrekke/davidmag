import { useState } from 'react'
import Link from 'next/link'
import { MenuAlt3Icon } from '@heroicons/react/solid'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { url: '/', title: 'home' },
    { url: '/github', title: 'github' },
    // { url: '/resume', title: 'resume' },
    // { url: '/react', title: 'react' },
    // { url: '/blog', title: 'blog' },
    // { url: '/contact', title: 'contact' },
  ]

  return (
    <>
      <MenuAlt3Icon
        className="absolute h-14 top-6 right-6 py-2 px-4 shadow rounded-lg text-gray-500 hover:text-indigo-400 hover:shadow-lg transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`${
          !isOpen && 'hidden'
        } flex flex-col items-center absolute text-2xl text-gray-500 top-24 right-6 py-2 px-4 shadow rounded-lg hover:shadow-lg transition`}
      >
        {navItems.map(({ title, url }, i) => (
          <Link href={url} key={i}>
            <p className="hover:text-indigo-400 cursor-pointer transition">
              {title}
            </p>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Nav
