'use client'
import { useState, useMemo } from 'react'
import { projectType } from '@/app/util/types'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import ProjectItem from './ProjectItem'

const ProjectTable = ({ projects }: { projects: projectType[] }) => {
	const [search, setSearch] = useState<string>('')
	const filteredProjects = useMemo(() => {
		if (search === '') return projects
		return projects.filter((project) => {
			return project.title.toLowerCase().includes(search.toLowerCase())
		})
	}, [search])

	return (
		<div className='flex flex-col gap-4'>
			<div className='w-full border-[1px] border-gray-200 bg-white h-10 rounded-lg text-sm px-2 flex items-center gap-2'>
				<HiMagnifyingGlass size={'20px'} color={'gray'} />
				<input
					onChange={(e) => setSearch(e.target.value)}
					placeholder='Search...'
					type='text'
					className='w-full focus:outline-none'
				/>
			</div>
			<div className='table'>
				{filteredProjects.length > 0 &&
					filteredProjects.map((project) => (
						<ProjectItem key={`project ${project.id}`} project={project} />
					))}
			</div>
		</div>
	)
}

export default ProjectTable
