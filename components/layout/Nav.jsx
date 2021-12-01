import { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { url: '/', title: 'home' },
    { url: '/blog', title: 'blog' },
    // { url: '/contact', title: 'contact' },
  ]

  return (
    <>
      <btn
        className="absolute top-6 right-6 py-2 px-4 shadow rounded-lg hover:text-indigo-400 hover:shadow-lg transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        toggle nav
      </btn>
      <div
        className={`${
          !isOpen && 'hidden'
        } flex flex-col items-center absolute top-16 right-6 py-2 px-4 shadow rounded-lg`}
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
