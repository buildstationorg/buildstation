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
    title: 'Career tracks',
  },
  {
    id: 2,
    slug: 'skill-tracks',
    title: 'Skill tracks',
  },
  {
    id: 3,
    slug: 'courses',
    title: 'Courses',
  }
]

export const learnCourses: learnCourse[] = [
  {
    id: 1,
    title: "Solidity",
    slug: 'https://github.com/buildstationorg/solidity-bootcamp',
    track: 'courses'
  },
  {
    id: 2,
    title: 'Fullstack evm dapp developer',
    slug: 'https://github.com/buildstationorg/evm-dapp-bootcamp',
    track: 'career-tracks'
  },
  {
    id: 3,
    title: 'Rust',
    slug: 'https://github.com/buildstationorg/rust-bootcamp',
    track: 'courses'
  },
  {
    id: 4,
    title: 'Foundry training',
    slug: "https://github.com/buildstationorg/foundry-bootcamp",
    track: 'skill-tracks'
  }
]