import { useState } from 'react'
import { MenuAlt3Icon } from '@heroicons/react/solid'

import NavModal from '@components/layout/nav/NavModal'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <MenuAlt3Icon
        className="absolute h-14 top-4 right-4 py-2 px-4 shadow-lg border border-opacity-50 rounded-lg text-gray-500 hover:text-indigo-400 hover:shadow-xl transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      <NavModal isOpen={isOpen} />
    </>
  )
}

export default Nav
