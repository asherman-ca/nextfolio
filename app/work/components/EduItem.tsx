import { eduType } from '@/app/util/types'
import { MdOutlineSchool } from 'react-icons/md'
import React from 'react'

const EduItem = ({ edu }: { edu: eduType }) => {
	return (
		<a
			href={edu.url}
			target='_blank'
			rel='noopener noreferrer'
			className={`bg-white shadow-sm p-6 border border-gray-200 rounded-md flex flex-col gap-4 text-sm ${
				edu.active && 'hover:shadow-md transition-all duration-300'
			} ${!edu.active && 'hover:cursor-not-allowed'}`}
		>
			<div className='flex items-center gap-4'>
				<MdOutlineSchool size={'32px'} color={'gray'} />
				<div className='flex flex-col gap-[2px]'>
					<span className='font-medium'>{edu.title}</span>
					<span className='text-gray-500'>{edu.degree}</span>
				</div>
			</div>
			<div className='text-gray-500 gap-1 flex flex-col text-xs'>
				{edu.details.map((item, idx) => {
					return <div key={`item ${idx}`}>{item}</div>
				})}
			</div>
		</a>
	)
}

export default EduItem
