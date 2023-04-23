import React from 'react'
import ProjectTable from './components/ProjectTable'

export const metadata = {
	title: 'Projects',
	description: 'Portfolio by Alex Sherman',
}

const fetchProjects = async () => {
	const res = await fetch(
		`${
			process.env.NEXT_PUBLIC_HOST_URL || 'http://localhost:3000'
		}/api/projects`,
		{
			next: {
				revalidate: 10000000,
			},
		}
	)
	const data = await res.json()
	return data
}

const page = async () => {
	const projectsResponse = await fetchProjects()

	return (
		<div className='layout'>
			<ProjectTable projects={projectsResponse.projects} />
		</div>
	)
}

export default page
