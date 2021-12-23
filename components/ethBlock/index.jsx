import { useEffect } from 'react'
import useBlockNumber from '@hooks/useBlockNumber'

const EthBlock = () => {
  const blockNumber = useBlockNumber()

  useEffect(() => {
    if (!window.ethereum) {
      document.getElementById('ethblock').classList.add('hidden')
    } else {
      document.getElementById('ethblock').classList.remove('hidden')
    }
  }, [])
  return (
    <div
      id="ethblock"
      className="text-gray-600 text-lg absolute bottom-10 flex align-center items-center space-x-3"
    >
      <p>eth block: {blockNumber}</p>
      <ConnectWallet />
    </div>
  )
}

const ConnectWallet = () => (
  <button className="text-gray-600 p-2 rounded-lg shadow cursor-pointer hover:shadow-lg hover:text-purple-400 transition">
    connect wallet
  </button>
)

export default EthBlock
