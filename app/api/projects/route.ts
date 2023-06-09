import { NextResponse } from 'next/server'

export async function GET(request: Request) {
	const projectsArray = [
		{
			id: 10,
			title: 'Supper',
			framework: 'React',
			url: 'https://supper-eta.vercel.app/',
			github: 'https://github.com/asherman-ca/supper',
			tools: ['React', 'Next.js', 'mySQL', 'TailwindCSS'],
			description: 'A Job Search Tracker with AI CV Builder',
			items: [
				'SSR to improve SEO and performance',
				'ReactQuery for efficient data fetching and caching',
				'NextAuth for authentication and authorization',
				'End to End type safety and consistency using Zod + TypeScript inference',
				'OpenAi Vercel SDK for AI CV Builder',
				'Edge function for optimal handling of OpenAi data stream',
				'Subtle animations using Framer Motion for seemless UX',
				'DaisyUI for rapid prototyping and TailwindCSS for custom styling',
			],
			active: true,
		},
		{
			id: 10,
			title: 'Chonkify',
			framework: 'React',
			url: 'https://chonkify.vercel.app/',
			github: 'https://github.com/asherman-ca/chonkify',
			tools: [
				'React',
				'Next.js',
				'Stable Diffusion',
				'mySQL',
				'Firebase',
				'Stripe',
			],
			description: 'An AI image generator for pets',
			items: [
				'Best-in-class image model for image generation',
				'Data streaming for image responses for optimal UX',
				'Token system to manage user access to AI model',
				'SSR and client side rendering to improve SEO and performance',
				'Client side data caching using SWR for efficiency and dynamic invalidation',
				'Accessed multiple web services for image hosting, AI modeling, data storage and app hosting',
				'Edge function for optimal handling of large data stream from image model',
				'Subtle animations for seemless UX',
				'Fully responsive design with mobile first approach',
				'Handrolled modern ui components on top of Tailwind utility classes and HeadlessUI',
			],
			active: true,
		},
		{
			id: 9,
			title: 'Chonker',
			framework: 'React',
			url: 'https://chonker.vercel.app/',
			github: 'https://github.com/asherman-ca/chonker',
			tools: ['React', 'Next.js', 'Stable Diffusion', 'Replicate', 'mySQL'],
			description: 'An AI image generator for pets',
			items: [
				'Utilized Stable Diffusion and Replicate to generate images',
				'Implimented token system to manage user access to AI model',
				'Combined SSR and client side rendering to improve SEO and performance',
				'Client side data caching using SWR for efficiency and dynamic invalidation',
				'Accessed multiple web services for image hosting, AI modeling, data storage and app hosting',
				'Applied subtle animations for seemless UX',
				'Handrolled modern ui components on top of Tailwind utility classes and HeadlessUI',
			],
			active: true,
		},
		{
			id: 8,
			title: 'Tickr4',
			framework: 'React',
			url: 'https://tickr4.vercel.app/',
			github: 'https://github.com/asherman-ca/tickr4',
			tools: ['React', 'Next.js', 'NewsAPI', 'CoinGecko', 'NeonSQL'],
			description:
				'A crypto ticker, social network and testnet trading simulator',
			items: [
				'Combined SSR and client side rendering to improve SEO and performance',
				'Used incremental static regeneratiion on dynamic routes for optimal performance',
				'Accessed multiple public/free APIs to provide live data and news',
				'Applied subtle animations for seemless UX',
				'Handrolled modern ui components on top of Tailwind utility classes',
				'Calculated realized and unrealized PNL stats using order history and live prices',
			],
			active: true,
		},
		{
			id: 6,
			title: 'BuzzThing',
			framework: 'React',
			url: '',
			github: 'https://github.com/asherman-ca/infinilist',
			tools: ['React', 'Next.js', 'OpenAI', 'Pexels'],
			description: 'A generative site of entertaining listicles',
			items: [
				"Use OpenAI's GPT-3.5 model to generate consumable listicle content",
				'dynamic and efficient image queries to Pexels API to provide relevant images',
				'static site generation to improve performance, SEO and prevent unbound API expedeniture',
				'unhosted to due to cost of GPT-3.5 API and vercel hosting limitations',
			],
			active: false,
		},
		{
			id: 7,
			title: 'JobThing',
			framework: 'React',
			url: 'https://job-thing.vercel.app/',
			github: 'https://github.com/asherman-ca/jobThing',
			tools: [
				'React',
				'Next.js',
				'TypeScript',
				'Prisma',
				'PostgreSQL',
				'TailwindCSS',
			],
			items: [
				'100% Server Rendering for SEO and performance',
				'Full Next 13.4 utilization with 100% server component fetching/mutation',
				'Organizes job applications by job search and application status',
				'Handrolled modern ui components on top of Tailwind utility classes',
				'Subtle animations for optimal UX',
			],
			description: 'A job application tracker',
			active: true,
		},
		{
			id: 1,
			title: 'Tickr3',
			framework: 'React',
			url: 'https://tickr3.vercel.app/',
			github: 'https://github.com/asherman-ca/tickr3',
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
			github: 'https://github.com/asherman-ca/tickr2',
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
			github: 'https://github.com/asherman-ca/miyagi',
			description: 'Social platform for discovering and sharing content',
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
			url: '',
			github: 'https://github.com/davidhu2000/myonlinepool',
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
			url: '',
			github: 'https://github.com/davidhu2000/eezee',
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
