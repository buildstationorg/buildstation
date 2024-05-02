import type { MDXComponents } from 'mdx/types'
import H1 from '@/components/mdx/h1'
import H2 from '@/components/mdx/h2'
import H3 from '@/components/mdx/h3'
import H4 from '@/components/mdx/h4'
import H5 from '@/components/mdx/h5'
import P from '@/components/mdx/p'
import Img from '@/components/mdx/img'
import Code from '@/components/mdx/code'
import Blockquote from '@/components/mdx/blockquote'
import UL from '@/components/mdx/ul'
import OL from '@/components/mdx/ol'
import A from '@/components/mdx/a'

export function useMDXComponents(components: MDXComponents): MDXComponents {

  return {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    p: P,
    img: Img,
    code: Code,
    blockquote: Blockquote,
    ul: UL,
    ol: OL,
    a: A,
    ...components,
  }
}