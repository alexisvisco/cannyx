import { Button, SIZE } from 'baseui/button'
import React from 'react'
import { GoPlus } from 'react-icons/go'
import { Boards } from '../components/board/Boards'
import { RoadMapOverview } from '../components/roadmap/RoadMapOverview'
import { Tip } from '../components/tip/Tip'
import { Heading, HeadingLevel } from 'baseui/heading'
import history from '../history'

const Dashboard: React.FC = () => {

	const handleCreateDashboard = () => history.push('/boards/create')

	const CreateBoard = () => <Button onClick={ handleCreateDashboard } size={ SIZE.compact }
																		startEnhancer={ () => <GoPlus/> }>Create</Button>

	return (
		<div className="container">

			<HeadingLevel>

				<Tip/>

				<br/>


				<div style={ { display: 'flex', alignItems: 'center' } }>
					<Heading styleLevel={ 5 }>Boards</Heading>
					<div style={ { marginLeft: 'auto' } }>
						<CreateBoard/>
					</div>
				</div>

				<Boards boards={ [
					{ name: 'Front', posts: 12 },
					{ name: 'Backend', posts: 89 },
					{ name: 'Services', posts: 1 }
				] }/>

				<Heading styleLevel={ 5 }>Roadmap</Heading>

				<RoadMapOverview/>

			</HeadingLevel>

		</div>
	)
}

export default Dashboard
