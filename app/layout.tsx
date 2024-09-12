import '../global.css';
import { Inter } from '@next/font/google';
import LocalFont from '@next/font/local';
import { Metadata } from 'next';
import { Analytics } from './components/analytics';

export const metadata: Metadata = {
  title: {
    default: 'Ocean Orange',
    template: '%s | Ocean Orange - Fresh solutions for a sea of opportunities.'
  },
  icons: {
    icon: '/favicon.svg'
  },
  description:
    'Ocean Orange provides software consultancy and implementation. With an expertise in AI integration for businesses of any size.',
  keywords: [
    'ocean',
    'ocean orange',
    'technology',
    'software',
    'software consultancy',
    'AI implementation',
    'AI integration',
    'innovative solutions'
  ],
  openGraph: {
    title: 'Ocean Orange | Technology & Software Services',
    description:
      'Ocean Orange provides fresh technology and software services for a sea of opportunities. Dive into innovative solutions for your business.',
    url: 'https://ocean-orange.com',
    siteName: 'Ocean Orange',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://ocean-orange.com/og-image.webp',
        width: 1024,
        height: 1024,
        alt: 'Ocean Orange - Technology & Software Services'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={[inter.variable, calSans.variable].join(' ')}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
