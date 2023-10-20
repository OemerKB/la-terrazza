import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import LogoComp from './components/LogoComp'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex py-2">
        <LogoComp src={'/logoWhiteFont.png'} alt={''} width={180} height={37} />
        <Header />
      </div>
      <div className=''>
        <Hero />
      </div>
    </main>
  )
}
