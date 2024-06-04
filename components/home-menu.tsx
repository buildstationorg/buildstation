export default function HomeMenu() {
  const menuItems = [
    { 
      id: 1,
      title: "awesome-buildstation", 
      href: "/awesome-buildstation" 
    },
    { 
      id: 2,
      title: "learn", 
      href: "/learn" 
    },
    { 
      id: 3,
      title: "devrel playbook", 
      href: "/devrel-playbook" 
    },
    {
      id: 4,
      title: "videos",
      href: "/videos"
    },
    {
      id: 5,
      title: "articles",
      href: "/articles"
    },
    {
      id: 6,
      title: "evm dapp bootcamp",
      href: "/evm-dapp-bootcamp"
    },
    {
      id: 7,
      title: "evm dapp bootcamp",
      href: "/evm-dapp-bootcamp"
    },
    {
      id: 8,
      title: "evm dapp bootcamp",
      href: "/evm-dapp-bootcamp"
    }
  ];

  return (
    <div>
      <h2>explore our content library</h2>
      <div>
        <h2>awesome-buildstation</h2>
        <p>an opinionated list of awesome projects built or contributed by the buildstation community</p>
      </div>
    </div>
  )
}
