import TerminalMenu from '@/components/terminal-menu';
import KeyboardNav from '@/components/keyboard-nav';

export default function Home() {
  const menuItems = [
    {
      id: 1,
      name: 'buildStack',
      url: '/buildstack'
    },
    {
      id: 2,
      name: 'Grants',
      url: '/grants'
    },
    {
      id: 3,
      name: 'Learn',
      url: '/learn'
    },
    {
      id: 4,
      name: 'DevRel playbook',
      url: '/devrel-playbook'
    },
    {
      id: 5,
      name: 'Videos',
      url: '/videos'
    },
    {
      id: 6,
      name: 'Articles',
      url: '/articles'
    },
    {
      id: 7,
      name: 'Events',
      url: '/events'
    }
  ];

  const keyboardNavItems = [
    {
      keyboard: '1',
      description: 'Sections',
      url: '/buildstack'
    },
    {
      keyboard: '2',
      description: 'Sections',
      url: '/grants'
    },
    {
      keyboard: '3',
      description: 'Sections',
      url: '/learn'
    },
    {
      keyboard: '4',
      description: 'Sections',
      url: '/devrel-playbook'
    },
    {
      keyboard: '5',
      description: 'Sections',
      url: '/videos'
    },
    {
      keyboard: '6',
      description: 'Sections',
      url: '/articles'
    },
    {
      keyboard: '7',
      description: 'Sections',
      url: '/events'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
      <div className="flex flex-col gap-4 w-full md:w-5/6 text-left">
        <div className="flex flex-row gap-2 items-center">
          <span className="text-sm bg-primary text-secondary font-bold px-2 py-1">00.</span>
          <h1 className="text-md font-bold">Index</h1>
        </div>
        <h1 className="text-xl md:text-3xl font-bold">The Onchain Developer Framework</h1>
        <div className="flex flex-col gap-12 mt-4">
          <p className="text-md">High quality, open source, open code software for onchain developers. Design, build and launch your best DApp from scratch.</p>
          <p className="text-md">Join a vibrant builder community to learn, ask questions, and get help. Get the guidance to start and iterate your product with the community feedbacks.</p>
          <p className="text-md">Founded upon the freedom software movement ethos of transparency, collaboration, and empowerment.</p>
        </div>
      </div>
      <div className="flex flex-col border-2 border-primary gap-2 pb-8">
        <div className="flex flex-row justify-between items-center bg-primary text-secondary p-2">
          <h1 className="text-lg md:text-xl font-bold">Terminal</h1>
          <p className="text-md">_</p>
        </div>
        <div className="flex flex-col px-4 py-2">
          <h2 className="text-md">$ cat build.md</h2>
          <TerminalMenu menuItems={menuItems} />
        </div>
      </div>
      <KeyboardNav keyboardNavItems={keyboardNavItems} />
    </div>
  );
}

