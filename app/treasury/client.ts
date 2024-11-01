import { http, createPublicClient } from 'viem'
import { arbitrum, scroll } from 'viem/chains'
 
export const arbitrumPublicClient = createPublicClient({
  chain: arbitrum,
  transport: http(),
})

export const scrollPublicClient = createPublicClient({
  chain: scroll,
  transport: http(),
})