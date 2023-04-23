import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Alex Sherman',
	description: 'Portfolio by Alex Sherman',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Nav />
				<div className='px-8'>{children}</div>
			</body>
		</html>
	)
}
