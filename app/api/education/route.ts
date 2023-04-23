import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const eduArray = [
		{
			id: 1,
			title: 'App Academy',
			details: [
				'1000 hour full stack web development curriculum, 3% acceptance rate',
			],
		},
		{
			id: 2,
			title: 'Union College',
			details: ['BA major in economics'],
		},
	]

	return NextResponse.json({ edu: eduArray })
}
