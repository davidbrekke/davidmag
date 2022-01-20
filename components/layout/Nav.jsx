import { useState } from 'react'
import Link from 'next/link'
import { MenuAlt3Icon } from '@heroicons/react/solid'
import { navItems } from '@lib/navItems'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

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
            <a
              target="_blank"
              className="hover:text-indigo-400 cursor-pointer transition"
            >
              {title}
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Nav
