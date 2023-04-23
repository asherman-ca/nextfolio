import { workType } from '@/app/util/types'
import React from 'react'
import WorkItem from './WorkItem'

const workTable = ({ work }: { work: workType[] }) => {
	return (
		<div className='table'>
			{work.length > 0 &&
				work.map((work) => <WorkItem key={`work ${work.id}`} work={work} />)}
		</div>
	)
}

export default workTable
