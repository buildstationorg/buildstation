import { http, createPublicClient } from 'viem'
import { arbitrum } from 'viem/chains'
 
export const arbitrumPublicClient = createPublicClient({
  chain: arbitrum,
  transport: http(),
})