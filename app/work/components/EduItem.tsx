'use client'
import { eduType } from '@/app/util/types'
import { MdOutlineSchool } from 'react-icons/md'
import React from 'react'
import { motion } from 'framer-motion'

const EduItem = ({ edu }: { edu: eduType }) => {
	return (
		<motion.a
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			href={edu.url}
			target='_blank'
			rel='noopener noreferrer'
			className={`bg-white dark:bg-black dark:border-gray-700 shadow-sm dark:text-dark_font px-8 py-6 border border-gray-200 rounded-md flex flex-col gap-4 text-sm ${
				edu.active && 'hover:shadow-md transition-all duration-300'
			} ${!edu.active && 'hover:cursor-not-allowed'}`}
		>
			<div className='flex items-center gap-4'>
				<MdOutlineSchool
					size={'32px'}
					color={'gray'}
					className='dark:fill-white'
				/>
				<div className='flex flex-col gap-[2px]'>
					<span className='font-medium dark:text-white'>{edu.title}</span>
					<span className='text-gray-500 dark:text-dark_font'>
						{edu.degree}
					</span>
				</div>
			</div>
			<ul className='text-gray-500 dark:text-dark_font gap-1 flex flex-col text-xs list-disc'>
				{edu.details.map((item, idx) => {
					return <li key={`item ${idx}`}>{item}</li>
				})}
			</ul>
		</motion.a>
	)
}

export default EduItem
