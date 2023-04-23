// 'use client'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

const SubNav = () => {
	// const router = useRouter()
	// console.log(router)

	return (
		<div className='text-sm flex items-center px-5'>
			<Link href={'/work'} className='navLink'>
				Work
			</Link>
			<Link href={'/projects'} className='navLink'>
				Projects
			</Link>
			<Link href={'/education'} className='navLink'>
				Education
			</Link>
		</div>
	)
}

export default SubNav
