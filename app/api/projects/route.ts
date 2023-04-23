import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const projectsArray = [
		{
			id: 1,
			title: 'Project 1',
			description: 'This is the first project',
			items: ['Item 1', 'Item 2', 'Item 3'],
		},
		{
			id: 2,
			title: 'Project 2',
			description: 'This is the second project',
			items: ['Item 1', 'Item 2', 'Item 3'],
		},
	]

	return NextResponse.json({ projects: projectsArray })
}
