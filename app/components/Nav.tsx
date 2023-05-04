'use client'
// import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import SubNav from './SubNav'
import useDarkMode from '../hooks/useDarkMode'
import { BiSun, BiMoon } from 'react-icons/bi'
import { motion } from 'framer-motion'

const Nav = () => {
	const [darkTheme, setDarkTheme] = useDarkMode()
	const handleMode = () => setDarkTheme(!darkTheme)

	useEffect(() => {
		if (darkTheme === undefined) {
			setDarkTheme(true)
		}
	}, [darkTheme])

	return (
		<div className='flex flex-col bg-white border-b border-gray-200 pt-4 gap-4 dark:border-gray-700 dark:bg-black dark:text-white'>
			<div className='flex justify-between px-8'>
				<div className='hidden sm:flex gap-4 items-center text-sm'>
					<svg
						aria-label='Vercel Logo'
						viewBox='0 0 75 65'
						height='26'
						data-testid='dashboard/logo'
						className='dark:fill-white'
					>
						<path d='M37.59.25l36.95 64H.64l36.95-64z'></path>
					</svg>
					<span className='text-gray-200 text-2xl dark:text-dark_font'>/</span>
					<Image
						src='/headshot.jpeg'
						alt='headshot'
						width={30}
						height={30}
						className='rounded-full'
					/>
					asherman-ca
					<span className='py-[2px] px-3 text-white bg-black rounded-full dark:bg-dark_hover dark:text-dark_font'>
						Pro
					</span>
				</div>
				<div className='flex gap-4 text-sm items-center'>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='mailto: asherman.ca@gmail.com'
						className='text-gray-500 py-1 px-3 border border-gray-200 rounded-md hover:text-black hover:border-black cursor-pointer dark:border-gray-700 dark:text-dark_font dark:hover:text-white dark:hover:border-white'
					>
						Contact
					</a>
					{!darkTheme ? (
						<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
							<BiMoon
								onClick={() => handleMode()}
								className='cursor-pointer'
								size={'24px'}
							/>
						</motion.div>
					) : (
						<motion.div animate={{ opacity: 1, fill: 'white' }}>
							<BiSun
								onClick={() => handleMode()}
								className='cursor-pointer'
								size={'24px'}
							/>
						</motion.div>
					)}
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
