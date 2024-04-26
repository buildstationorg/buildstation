import type { MDXComponents } from 'mdx/types'
import H2 from '@/components/mdx/h2'
import H3 from '@/components/mdx/h3'
import H4 from '@/components/mdx/h4'
import P from '@/components/mdx/p'
import Img from '@/components/mdx/img'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    img: Img,
    ...components,
  }
}