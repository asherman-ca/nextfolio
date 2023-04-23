'use client'
import { useState, useMemo } from 'react'
import { projectType } from '@/app/util/types'

const ProjectTable = ({ projects }: { projects: projectType[] }) => {
	// console.log('projects', projects)
	return (
		<div>
			<input type='text' />
			<div>
				{projects.length > 0 &&
					projects.map((project) => (
						<div key={project.id}>
							<div>{project.title}</div>
						</div>
					))}
			</div>
		</div>
	)
}

export default ProjectTable
