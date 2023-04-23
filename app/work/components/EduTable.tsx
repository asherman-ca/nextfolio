import React from 'react'
import EduItem from './EduItem'
import { eduType } from '@/app/util/types'

const EduTable = ({ edu }: { edu: eduType[] }) => {
	return (
		<div className='table'>
			{edu.length > 0 &&
				edu.map((edu) => <EduItem key={`edu ${edu.id}`} edu={edu} />)}
		</div>
	)
}

export default EduTable
