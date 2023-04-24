import React from 'react'
import Image from 'next/image'
import SubNav from './SubNav'

const Nav = () => {
	return (
		<div className='flex flex-col bg-white border-b border-gray-200 pt-4 gap-4'>
			<div className='flex justify-between px-8'>
				<div className='hidden sm:flex gap-4 items-center text-sm'>
					<svg
						aria-label='Vercel Logo'
						fill='var(--geist-foreground)'
						viewBox='0 0 75 65'
						height='26'
						data-testid='dashboard/logo'
					>
						<path d='M37.59.25l36.95 64H.64l36.95-64z'></path>
					</svg>
					<span className='text-gray-200 text-2xl'>/</span>
					<Image
						src='/headshot.jpeg'
						alt='headshot'
						width={30}
						height={30}
						className='rounded-full'
					/>
					asherman-ca
					<span className='py-[2px] px-3 text-white bg-black rounded-full'>
						Pro
					</span>
				</div>
				<div className='flex gap-4 text-sm items-center'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='mailto: asherman.ca@gmail.com'
						className='text-gray-500 py-1 px-3 border border-gray-200 rounded-md hover:text-black hover:border-black cursor-pointer'
					>
						Contact
					</a>
					<Image
						src='/headshot.jpeg'
						alt='headshot'
						width={30}
						height={30}
						className='rounded-full'
					/>
				</div>
			</div>
			<SubNav />
		</div>
	)
}

export default Nav
