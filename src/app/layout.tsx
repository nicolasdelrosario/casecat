import { metadata } from './metadata'
import { Poppins } from 'next/font/google'

import { Footer, Navbar } from '@/components'

import './globals.css'

import { cn } from '@/lib/utils'

export { metadata }

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '800', '900'],
})

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body className={cn('min-h-screen', poppins.className)}>
				<header className='sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
					<Navbar />
				</header>
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
