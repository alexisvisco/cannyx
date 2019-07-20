import { StyledLink } from 'baseui/link'
import * as React from 'react'
import { StatefulList } from 'baseui/dnd-list'
import { Card } from 'baseui/card'
import history from '../../history'


interface IProps {
	boards: {
		name: string,
		posts: number
	}[]
}


export const Boards = ({ boards }: IProps) => {

	const handleBoardPosts = (board) => history.push(`/boards/${ board }/posts`)

	return <Card>
		<StatefulList
			removable
			initialState={ {
				items: boards.map(e => {
					return <div style={ { cursor: 'pointer' } }>
						<StyledLink onClick={ () => handleBoardPosts(e.name) }>{ e.name }</StyledLink>
					</div>
				})
			} }
			onChange={ console.log }
		/>
	</Card>
}
