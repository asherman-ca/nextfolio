import React from 'react'
import ProjectTable from './components/ProjectTable'

export const metadata = {
	title: 'Projects',
	description: 'Portfolio by Alex Sherman',
}

const fetchProjects = async () => {
	const res = await fetch('http://localhost:3000/api/projects')
	const data = await res.json()
	return data
}

const page = async () => {
	const projectsResponse = await fetchProjects()
	console.log(projectsResponse)
	return (
		<div className='layout'>
			<ProjectTable projects={projectsResponse.projects} />
		</div>
	)
}

export default page
