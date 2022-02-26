const Divider = ({ col, min }) => {
  return (
    <div
      className={`border ${min ? 'w-content my-2' : 'w-full'} rounded-full`}
    />
  )
}

export default Divider
