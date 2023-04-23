import { workType } from '@/app/util/types'
import { BsCodeSlash } from 'react-icons/bs'

const WorkItem = ({ work }: { work: workType }) => {
	return (
		<a
			href={work.url}
			target='_blank'
			rel='noopener noreferrer'
			className={`bg-white shadow-sm p-6 border border-gray-200 rounded-md flex flex-col gap-4 text-sm ${
				work.active && 'hover:shadow-md transition-all duration-300'
			} ${!work.active && 'hover:cursor-not-allowed'}`}
		>
			<div className='flex items-center gap-4'>
				{work.type === 'code' && <BsCodeSlash size={'32px'} color={'gray'} />}
				<div className='flex flex-col gap-[2px]'>
					<span className='font-medium'>{work.company}</span>
					<span className='text-gray-500'>{work.title}</span>
				</div>
			</div>
			<div className='text-gray-500 gap-1 flex flex-col text-xs'>
				{work.items.map((item, idx) => {
					return <div key={`item ${idx}`}>{item}</div>
				})}
			</div>
		</a>
	)
}

export default WorkItem
