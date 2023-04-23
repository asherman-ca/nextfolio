import React from 'react'
import { workType } from '../util/types'
import WorkTable from './components/WorkTable'

export const metadata = {
	title: 'Work',
	description: 'Portfolio by Alex Sherman',
}

const fetchWork = async () => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_HOST_URL || 'http://localhost:3000'}/api/work`
		)
		const data = await res.json()
		return data
	} catch (err) {
		return { work: [] }
	}
}

const page = async () => {
	const workResponse = await fetchWork()

	return (
		<div className='layout'>
			<div className='text-4xl pt-4 pb-8'>Experience</div>
			<WorkTable work={workResponse.work} />
		</div>
	)
}

export default page
