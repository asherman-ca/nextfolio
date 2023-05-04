import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import Hydrate from './components/Hydrate'

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
				<Hydrate>
					<Nav />
					<div className='px-8 dark:bg-dark_bg flex flex-col flex-1'>
						{children}
					</div>
				</Hydrate>
			</body>
		</html>
	)
}
