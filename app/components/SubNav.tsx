'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SubNav = () => {
	const pathname = usePathname()

	return (
		<div className='text-sm flex items-center px-5 dark:bg-black dark:text-white'>
			<div
				className={`pb-3 relative ${
					pathname === '/' && 'navLinkContainer'
				} dark:border-white`}
			>
				<Link href={'/'} className='navLink'>
					Projects
				</Link>
			</div>
			<div
				className={`pb-3 relative ${
					pathname === '/work' && 'navLinkContainer'
				} dark:border-white`}
			>
				<Link href={'/work'} className='navLink'>
					Experience
				</Link>
			</div>
			<div className='pb-3'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://github.com/asherman-ca'
					className='navLink'
				>
					Github
				</a>
			</div>
			<div className='pb-3'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.linkedin.com/in/alex-sherman-1ba03649/'
					className='navLink'
				>
					LinkedIn
				</a>
			</div>
		</div>
	)
}

export default SubNav
