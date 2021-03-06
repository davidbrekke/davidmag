import A from '@components/A'
import { navItems } from '@lib/navItems'

const Connect = () => (
  <div className="text-gray-600 text-xl flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2">
    {navItems.map(({ url, title }, i) => (
      <A href={url} text={title} key={i} />
    ))}
  </div>
)

export default Connect
