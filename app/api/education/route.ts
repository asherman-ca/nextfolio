import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const eduArray = [
		{
			id: 1,
			title: 'App Academy',
			degree: 'Full Stack Web Development',
			details: [
				'1000 hour full stack web development curriculum, 3% acceptance rate',
			],
			url: 'https://www.appacademy.io/',
			active: true,
		},
		{
			id: 2,
			title: 'Union College',
			degree: 'B.A.',
			details: ['BA major in economics'],
			url: 'https://www.union.edu/',
			active: true,
		},
	]

	return NextResponse.json({ edu: eduArray })
}
