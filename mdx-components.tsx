import type { MDXComponents } from 'mdx/types'
import H1 from '@/components/markdown/h1'
import H2 from '@/components/markdown/h2'
import H3 from '@/components/markdown/h3'
import H4 from '@/components/markdown/h4'
import H5 from '@/components/markdown/h5'
import P from '@/components/markdown/p'
import Img from '@/components/markdown/img'
import Code from '@/components/markdown/code'
import Blockquote from '@/components/markdown/blockquote'
import UL from '@/components/markdown/ul'
import OL from '@/components/markdown/ol'
import A from '@/components/markdown/a'

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