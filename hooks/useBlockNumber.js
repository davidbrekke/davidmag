import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

export default function useBlockNumber() {
  const [blockNumber, setBlockNumber] = useState()
  useEffect(() => {
    if (window.ethereum) {
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum)
      ;(async () => {
        const blkNumber = await ethProvider.getBlockNumber()
        setBlockNumber(blkNumber)
      })()
    }
  }, [])

  return blockNumber
}
