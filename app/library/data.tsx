type LibraryCategory = {
  id: number
  slug: string
  title: string
}

type LibraryPost = {
  id: number
  title: string
  slug: string
  category: string
}

export const libraryCategories: LibraryCategory[] = [
  {
    id: 1,
    slug: 'awesome-buildstation',
    title: 'awesome buildstation',
  },
  {
    id: 2,
    slug: 'learning',
    title: 'learning',
  },
  {
    id: 3,
    slug: 'ecosystem-playbook',
    title: 'ecosystem playbook',
  },
  {
    id: 5,
    slug: 'videos',
    title: 'videos',
  }
]

export const libraryPosts: LibraryPost[] = [
  {
    id: 1,
    title: 'list of awesome buildstation oss projects',
    slug: '/library/awesome-buildstation',
    category: 'awesome-buildstation'
  },
  {
    id: 2,
    title: 'evm dapp bootcamp',
    slug: '/evm-dapp-bootcamp',
    category: 'learning'
  },
  {
    id: 6,
    title: 'overview',
    slug: '/library/ecosystem-playbook-overview',
    category: 'ecosystem-playbook'
  },
  {
    id: 3,
    title: 'mini meetups',
    slug: '/library/ecosystem-playbook-overview/mini-meetups',
    category: 'ecosystem-playbook'
  },
  {
    id: 6,
    title: 'hacker house',
    slug: '/library/ecosystem-playbook-overview/hacker-house',
    category: 'ecosystem-playbook'
  },
  {
    id: 4,
    title: 'bounty program',
    slug: '/library/ecosystem-playbook-overview/bounty-program',
    category: 'ecosystem-playbook'
  },
  {
    id: 5,
    title: 'developer bootcamp',
    slug: '/library/ecosystem-playbook-overview/developer-bootcamp',
    category: 'ecosystem-playbook'
  },
  {
    id: 7,
    title: 'livestreams',
    slug: '/library/videos/livestreams',
    category: 'videos'
  },
  {
    id: 8,
    title: 'zero to one',
    slug: '/library/videos/zero-to-one',
    category: 'videos'
  }
]