import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const workArray = [
		{
			id: 1,
			company: 'Nurx',
			title: 'Software Engineer',
			url: 'https://nurx.com/',
			items: [
				'Created Ember components and added functionality to user-facing web app',
				'Wrote integration and unit tests for new features',
				'Automated synthetic tests using New Relic',
				'Developed and implemented scalable design patterns across platforms',
			],
			type: 'code',
			active: true,
		},
		{
			id: 2,
			company: 'MyOnlinePool',
			title: 'Freelance Developer',
			url: 'https://www.google.com/',
			items: [
				'Built a custom competitve bracket platform in 3 months',
				'Deployed and maintained the platform on heroku',
				'Maintained and update the software for a year after completion',
			],
			type: 'code',
			active: false,
		},
		{
			id: 3,
			company: 'App Academy',
			title: 'Teaching Assistant',
			url: 'https://www.appacademy.io/',
			items: [
				'Taught Ruby to prospective students through one-on-one support',
				'Introduced programming concepts in lectures of 30+ students',
				'Administered coding examinations in technical interviews',
			],
			type: 'code',
			active: true,
		},
	]

	return NextResponse.json({ work: workArray })
}
