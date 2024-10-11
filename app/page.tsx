import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';
import { TextEffect } from './components/text-effect';

const navigation = [{ name: 'Contact', href: '/contact' }, { name: 'Services', href: '/services' }];

export default function Home() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500'>
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={300}
        staticity={30}
        ease={20}
        color='#ffffff'
      />

      <nav className='z-20 my-16 animate-fade-in'>
        <ul className='flex items-center justify-center gap-4'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-lg text-zinc-200 duration-500 hover:underline'
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className='animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block' />
      <Particles
        className='absolute inset-0 z-10 animate-fade-in'
        quantity={300}
        staticity={30}
        ease={20}
      />
      <h1 className='text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text px-0.5 py-3.5 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl'>
        ocean orange
      </h1>

      <div className='animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block' />
      <div className='my-16 animate-fade-in text-center'>
        <h2 className='text-md text-zinc-200'>
          <TextEffect delay={3.1} per='char' preset='fade'>
            Fresh solutions for a sea of opportunities.
          </TextEffect>
        </h2>
      </div>
    </div>
  );
}
