'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const SubNav = () => {
	const pathname = usePathname()
	console.log(pathname)

	return (
		<div className='text-sm flex items-center px-5'>
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
					pathname === '/projects' && 'navLinkContainer'
				}`}
			>
				<Link href={'/projects'} className='navLink'>
					Projects
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
		</div>
	)
}

export default SubNav
