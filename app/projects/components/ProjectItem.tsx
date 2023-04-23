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
			className={`bg-white shadow-sm p-4 border border-gray-200 rounded-md flex flex-col gap-2 text-sm ${
				!project.active && 'hover:cursor-not-allowed'
			}`}
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
			<div className='flex flex-col gap-1'>
				{project.items.map((item, idx) => (
					<div key={`${project.id} idx`} className='text-xs text-gray-500'>
						- {item}
					</div>
				))}
			</div>
		</a>
	)
}

export default ProjectItem
