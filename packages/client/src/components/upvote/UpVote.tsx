import * as React from 'react'
import { GoTriangleUp } from 'react-icons/go'
import './UpVote.css'

interface IProps {
	vote: number,
	voted: boolean,
}

const colorVoted = '#276ef1'
const colorNotVoted = '#8A9BA8'

export const UpVote = ({ vote, voted }: IProps) => {
	return <div>
		<div className="upvote">
			<GoTriangleUp size={ 24 } color={ voted ? colorVoted : colorNotVoted }/>
			<div className="upvote-count">{ vote }</div>
		</div>
	</div>
}