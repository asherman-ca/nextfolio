export type projectType = {
	id: number
	title: string
	framework: string
	description: string
	tools: string[]
	items: string[]
	url: string
	active: boolean
}

export type workType = {
	id: number
	company: string
	title: string
	url: string
	items: string[]
	type: string
	active: boolean
}

export type eduType = {
	id: number
	title: string
	degree: string
	details: string[]
	active: boolean
	url: string
}
