import { metadata } from './metadata'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '800', '900'],
})

export { metadata }

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body className={poppins.className}>{children}</body>
		</html>
	)
}
