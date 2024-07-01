export type learnTrack = {
  id: number
  slug: string
  title: string
}

export type learnCourse = {
  id: number
  title: string
  slug: string
  track: string
}

export const learnTracks: learnTrack[] = [
  {
    id: 1,
    slug: 'career-tracks',
    title: 'career tracks',
  },
  {
    id: 2,
    slug: 'skill-tracks',
    title: 'skill tracks',
  },
  {
    id: 3,
    slug: 'courses',
    title: 'courses',
  }
]

export const learnCourses: learnCourse[] = [
  {
    id: 1,
    title: 'solidity',
    slug: '/learn/solidity',
    track: 'courses'
  },
  {
    id: 2,
    title: 'fullstack evm dapp developer',
    slug: '/learn/fullstack-evm-dapp-developer',
    track: 'career-tracks'
  },
  {
    id: 3,
    title: 'rust',
    slug: '/learn/rust',
    track: 'courses'
  },
  {
    id: 4,
    title: 'cairo',
    slug: '/learn/cairo',
    track: 'courses'
  },
  {
    id: 5,
    title: 'func',
    slug: '/learn/func',
    track: 'courses'
  },
  {
    id: 6,
    title: 'chainlink services',
    slug: '/learn/chainlink-services',
    track: 'skill-tracks'
  }
]