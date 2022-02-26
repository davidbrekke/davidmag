import { navItems } from '@lib/navItems'
import NavModalLink from '@components/layout/nav/NavModalLink'

const NavModal = ({ isOpen }) =>
  isOpen && (
    <div className="flex flex-col items-center absolute text-2xl border border-opacity-50 text-gray-500 top-24 bg-white right-6 py-2 px-4 shadow-lg rounded-lg hover:shadow-xl transition">
      <NavItems navItems={navItems} />
    </div>
  )

export default NavModal

const NavItems = ({ navItems }) =>
  navItems.map(({ title, url }, i) => (
    <NavModalLink title={title} url={url} key={i} />
  ))
