type Contributor = {
  id: number
  name: string
  role: string
  github: string | boolean
  twitter: string | boolean
}

export const coreData: Contributor[] = [
  {
    id: 1,
    name: "ZxStim",
    role: "core",
    twitter: "https://twitter.com/zxstim",
    github: "https://github.com/zxstim"
  },
  {
    id: 2,
    name: "Paulus",
    role: "core",
    twitter: "https://twitter.com/pauluspham0701",
    github: "https://github.com/phatpham0701"
  },
  {
    id: 3,
    name: "Dylan",
    role: "core",
    twitter: "https://twitter.com/0xdyln",
    github: "https://github.com/dylanngph"
  }
]

export const data: Contributor[] = [
  {
    id: 4,
    name: "Kay",
    role: "community",
    github: "https://twitter.com/kay_x86",
    twitter: "https://github.com/chauanhtuan185"
  },
  {
    id: 5,
    name: "SaitamaCode",
    role: "community",
    github: "https://github.com/fuckthekingcode",
    twitter: "https://twitter.com/anhphamrs"
  },
  {
    id: 6,
    name: "SNZ Capital",
    role: "sponsor",
    github: false,
    twitter: "https://twitter.com/snzholdings"
  }
]


