import Link from 'next/link'


export default function Page() {
  return (
    <div className="flex flex-col gap-24 w-full">
      <h1 className="text-3xl md:text-5xl font-bold">be the change you wish to see in the world.</h1>
      <Link className="underline text-blue-500" href="/">return home</Link>
      <div className="flex flex-col w-full gap-8">
        <h1 className="text-3xl font-medium">hi there!</h1>
        <p>welcome aboard builders</p>
        <p>let&apos;s get you up to date with the storyline so far</p>
        <p>back in 2023, we <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">ZxStim</code>, <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">Paulus</code> and <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">Dylan</code> started a small meet up series concept that later got backed by Dorahacks team called BUIDL Station (hope you have heard of it!) in Vietnam. We were tired of the endless low quality meetups, repetitive talking points and no real actions. The series went viral with tons of other communities adopting it. So far, we have hosted over 52 sessions, and many more sessions from other communities.</p>
        <p>then right about Q1 of 2024, we started an extension hacker house concept for BUIDL Station. The reviews are still rolling in but so far, everyone loves it.</p>
        <p>so now, we plan to take this global.</p>
        <p>but we don&apos;t want to just become another souless marketing agency.</p>
        <p>we want to make this into a global hacker movement,</p>
        <p>a station for builders to shape the future of the world,</p>
        <p>and thus buildstation is born!</p>
        <p>so join us, let&apos;s build the future together.</p>
        <p>Your frens</p>
        <p><a className="text-blue-500 underline" href="https://twitter.com/zxstim">Zxstim</a>, <a className="text-blue-500 underline" href="https://twitter.com/pauluspham0701">Paulus</a>, <a className="text-blue-500 underline" href="https://twitter.com/0xdyln">Dylan</a></p>
      </div>
    </div>
  )
}