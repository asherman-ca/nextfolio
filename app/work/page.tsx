import React from 'react'
import { workType, eduType } from '../util/types'
import WorkTable from './components/WorkTable'
import EduTable from './components/EduTable'

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

const fetchEducation = async () => {
	try {
		const res = await fetch(
			`${
				process.env.NEXT_PUBLIC_HOST_URL || 'http://localhost:3000'
			}/api/education`
		)
		const data = await res.json()
		return data
	} catch (err) {
		return { edu: [] }
	}
}

const page = async () => {
	const [workResponse, eduResponse] = await Promise.all([
		fetchWork(),
		fetchEducation(),
	])

	return (
		<div className='layout'>
			<div className='text-4xl pt-4 pb-8'>Experience</div>
			<WorkTable work={workResponse.work} />
			<div className='text-4xl py-8'>Education</div>
			<EduTable edu={eduResponse.edu} />
		</div>
	)
}

export default page
