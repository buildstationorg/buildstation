import { http, createPublicClient } from 'viem'
import { arbitrum, klaytn } from 'viem/chains'
 
export const arbitrumPublicClient = createPublicClient({
  chain: arbitrum,
  transport: http(),
})

export const klaytnPublicClient = createPublicClient({
  chain: klaytn,
  transport: http(),
})