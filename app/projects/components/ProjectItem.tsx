import { projectType } from '@/app/util/types'
import { FaReact } from 'react-icons/fa'
import { RiPulseLine } from 'react-icons/ri'
import { HiOutlineStatusOffline, HiOutlineExternalLink } from 'react-icons/hi'
import { motion } from 'framer-motion'

const ProjectItem = ({ project }: { project: projectType }) => {
	return (
		<motion.a
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			key={project.id}
			href={project.github}
			target='_blank'
			rel='noopener noreferrer'
			className={`bg-white dark:bg-black dark:border-gray-700 dark:text-dark_font shadow-sm px-8 py-6 border border-gray-200 rounded-md flex flex-col gap-4 text-sm relative dark:hover:border-white group`}
		>
			{project.url && (
				<motion.a
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					href={project.url}
					target='_blank'
					rel='noopener noreferrer'
					className='z-10 hidden group-hover:flex absolute items-center p-2 border w-10 h-10 -top-5 -right-5 rounded-full bg-black border-black !text-white hover:!text-black hover:bg-white dark:!text-black dark:hover:!bg-black dark:hover:!text-white dark:hover:!border-white dark:bg-white'
				>
					<HiOutlineExternalLink className='h-8 w-8 ' />
				</motion.a>
			)}
			<div className='flex justify-between items-center'>
				<div className='flex gap-2 items-center max-w-[80%] truncate'>
					{project.framework === 'React' && (
						<FaReact size={'32px'} color={'#95E8FE'} />
					)}
					<div className='flex flex-col gap-[2px] truncate'>
						<span className='font-medium dark:text-white'>{project.title}</span>
						<span className='text-gray-500 dark:text-dark_font truncate'>
							{project.url || project.github}
						</span>
					</div>
				</div>
				<div>
					{project.active ? (
						<RiPulseLine
							size={'32px'}
							color={'gray'}
							className='border border-gray-200 rounded-full p-1 dark:fill-white'
						/>
					) : (
						<HiOutlineStatusOffline
							size={'32px'}
							color={'gray'}
							className='border border-gray-200 rounded-full p-1 dark:fill-white'
						/>
					)}
				</div>
			</div>
			<div className='font-medium dark:text-white'>{project.description}</div>
			<ul className='flex flex-col gap-1 list-disc '>
				{project.items.map((item) => (
					<li
						key={`project ${project.id}`}
						className='text-xs text-gray-500 dark:text-dark_font'
					>
						{item}
					</li>
				))}
			</ul>
		</motion.a>
	)
}

export default ProjectItem
