import { projectType } from '@/app/util/types'
import { FaReact } from 'react-icons/fa'
import { RiPulseLine } from 'react-icons/ri'
import { HiOutlineStatusOffline } from 'react-icons/hi'

const ProjectItem = ({ project }: { project: projectType }) => {
	return (
		<a
			key={project.id}
			href={project.url}
			target='_blank'
			rel='noopener noreferrer'
			className={`bg-white shadow-sm px-8 py-6 border border-gray-200 rounded-md flex flex-col gap-4 text-sm ${
				project.active && 'hover:shadow-md transition-all duration-300'
			} ${!project.active && 'hover:cursor-not-allowed'}`}
		>
			<div className='flex justify-between items-center'>
				<div className='flex gap-2 items-center'>
					{project.framework === 'React' && (
						<FaReact size={'32px'} color={'#95E8FE'} />
					)}
					<div className='flex flex-col gap-[2px]'>
						<span className='font-medium'>{project.title}</span>
						<span className='text-gray-500'>{project.url}</span>
					</div>
				</div>
				<div>
					{project.active ? (
						<RiPulseLine
							size={'32px'}
							color={'gray'}
							className='border border-gray-200 rounded-full p-1'
						/>
					) : (
						<HiOutlineStatusOffline
							size={'32px'}
							color={'gray'}
							className='border border-gray-200 rounded-full p-1'
						/>
					)}
				</div>
			</div>
			<div className='font-medium'>{project.description}</div>
			<ul className='flex flex-col gap-1 list-disc'>
				{project.items.map((item) => (
					<li key={`project ${project.id}`} className='text-xs text-gray-500'>
						{item}
					</li>
				))}
			</ul>
		</a>
	)
}

export default ProjectItem
