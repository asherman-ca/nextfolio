'use client'
import { workType } from '@/app/util/types'
import { BsCodeSlash } from 'react-icons/bs'
import { motion } from 'framer-motion'

const WorkItem = ({ work }: { work: workType }) => {
	return (
		<motion.a
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			href={work.url}
			target='_blank'
			rel='noopener noreferrer'
			className={`bg-white dark:bg-black dark:border-gray-700 shadow-sm px-8 py-6 border border-gray-200 rounded-md flex flex-col gap-4 text-sm ${
				work.active && 'hover:shadow-md transition-all duration-300'
			} ${!work.active && 'hover:cursor-not-allowed'}`}
		>
			<div className='flex items-center gap-4'>
				{work.type === 'code' && (
					<BsCodeSlash
						size={'32px'}
						color={'gray'}
						className='dark:fill-white'
					/>
				)}
				<div className='flex flex-col gap-[2px]'>
					<span className='font-medium dark:text-white'>{work.company}</span>
					<span className='text-gray-500 dark:text-dark_font'>
						{work.title}
					</span>
				</div>
			</div>
			<ul className='text-gray-500 dark:text-dark_font gap-1 flex flex-col text-xs list-disc'>
				{work.items.map((item, idx) => {
					return <li key={`item ${idx}`}>{item}</li>
				})}
			</ul>
		</motion.a>
	)
}

export default WorkItem
