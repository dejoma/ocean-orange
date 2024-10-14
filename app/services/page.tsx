'use client';
import { Code, Palette, Globe, Zap } from 'lucide-react';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';

const services = [
  {
    icon: <Code size={20} />,
    title: 'Web Development',
    description: 'Custom web applications tailored to your business needs..'
  },
  {
    icon: <Globe size={20} />,
    title: 'AI Integration',
    description:
      'Seamlessly incorporate AI technologies into your existing infrastructure for enhanced capabilities.'
  },
  {
    icon: <Palette size={20} />,
    title: 'Backend Development',
    description:
      'Backend development for any application, and architectural design for a robust and scalable system.'
  },
  {
    icon: <Zap size={20} />,
    title: 'Performance Optimization',
    description:
      "Enhance your application's speed and efficiency for better user engagement."
  }
];

export default function Services() {
  return (
    <div className='bg-gradient-to-tr from-orange-300 via-orange-400 to-orange-500'>
      <Navigation />
      <div className='container mx-auto flex min-h-screen items-center justify-center px-4'>
        <div className='mx-auto mt-32 w-full max-w-5xl'>
          <h1 className='mb-8 text-center text-4xl font-bold text-white'>
            Our Services
          </h1>
          <p className='text-l mb-12 text-center text-zinc-100'>
            We offer a range of IT and web services to help your business. Some
            of the technologies we use are:
            <span>
              <br />
            </span>
            Next.js, Python (FastAPI), Ruby (Rails), C++, AI integration
            libraries like Langchain and Vercel's AI SDK
          </p>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12'>
            {services.map((s, i) => (
              <Card key={i}>
                <div className='group relative flex flex-col items-center gap-4 p-6 duration-700 md:p-8'>
                  <span className='drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-500 bg-zinc-900 text-sm text-zinc-200 duration-1000 group-hover:border-zinc-200 group-hover:bg-zinc-900 group-hover:text-white'>
                    {s.icon}
                  </span>
                  <div className='z-10 flex flex-col items-center text-center'>
                    <span className='font-display text-xl font-medium text-zinc-200 duration-150 group-hover:text-white lg:text-2xl'>
                      {s.title}
                    </span>
                    <span className='mt-2 text-sm text-zinc-800 duration-1000 group-hover:text-zinc-100'>
                      {s.description}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
