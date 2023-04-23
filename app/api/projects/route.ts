import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const projectsArray = [
		{
			id: 1,
			title: 'Tickr3',
			framework: 'React',
			url: 'https://tickr3.vercel.app/',
			tools: [
				'React',
				'Next.js',
				'TypeScript',
				'Prisma',
				'MySQL',
				'TailwindCSS',
			],
			items: [
				"Handrolled modern ui components while leveraging tailwind's utility classes",
				'Used server side rendering to improve SEO and performance',
				'Cached static data when possible to further improve performance',
				'Integrated CoinGecko API and severless db provider (Planetscale)',
				'Calculated realized and unrealized PNL stats using order history and live prices',
				'Added like feature to easily track specific assets',
			],
			description: 'A crypto ticker and testnet trading simulator',
			active: true,
		},
		{
			id: 2,
			title: 'Tickr2',
			framework: 'React',
			url: 'https://tickr2.vercel.app/',
			description: 'A crypto ticker and testnet trading simulator',
			tools: ['React', 'Firebase', 'TypeScript'],
			items: [
				'Integrated CoinGecko API and TradingView component',
				'Handrolled responsive / modern ui features using pure css',
				'Added like feature to easily track specific assets',
				'Provided live data using optimal React patterns',
				'Calculated PNL stats using order history',
			],
			active: true,
		},
		{
			id: 3,
			title: 'Miyagi',
			framework: 'React',
			url: 'https://miyagi.tech/',
			description: 'This is the third project',
			tools: ['React', 'Firebase', 'Bootstrap'],
			items: [
				'Enabled content discovery with search features',
				`Provided content interaction with 'like' and 'follow' features`,
				'Enriched post content with YouTube and Instagram embedding',
				'Structured css to allow seamless cross-platform UX',
			],
			active: true,
		},
		{
			id: 4,
			title: 'MyOnlinePool',
			framework: 'React',
			url: 'https://www.google.com',
			tools: ['React', 'Rails', 'SQL'],
			description: 'Social platform for competitive NFL brackets',
			items: [
				"Updated score data through queries to the NFL's api",
				'Processed payment through hand rolled PayPal implementation',
				'Utilized React to implement a responsive and modular frontend user experience',
			],
			active: false,
		},
		{
			id: 5,
			title: 'EZ Streaming',
			framework: 'React',
			url: 'https://www.google.com',
			tools: ['React-Native', 'Firebase'],
			description: 'Live database for discovering streaming locations',
			items: [
				"Created a cohesive UI using React-native's integrated styling attributes",
				'Queried GuideBox API to access multiple services in a single API call and reduce backend complexity',
			],
			active: false,
		},
	]

	return NextResponse.json({ projects: projectsArray })
}
