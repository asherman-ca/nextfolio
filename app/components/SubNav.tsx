'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SubNav = () => {
	const pathname = usePathname()

	return (
		<div className='text-sm flex items-center px-5'>
			<div
				className={`pb-3 relative ${
					pathname === '/projects' && 'navLinkContainer'
				}`}
			>
				<Link href={'/projects'} className='navLink'>
					Projects
				</Link>
			</div>
			<div
				className={`pb-3 relative ${
					pathname === '/work' && 'navLinkContainer'
				}`}
			>
				<Link href={'/work'} className='navLink'>
					Work
				</Link>
			</div>
			<div
				className={`pb-3 relative ${
					pathname === '/education' && 'navLinkContainer'
				}`}
			>
				<Link href={'/education'} className='navLink'>
					Education
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
