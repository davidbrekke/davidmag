const A = ({ href, text }) => (
  <a
    target="_blank"
    rel="noreferrer"
    className="px-4 py-1 w-min rounded-lg text-purple-600 hover:bg-purple-400 hover:text-gray-50 transition"
    href={href}
  >
    {text}
  </a>
)

export default A
