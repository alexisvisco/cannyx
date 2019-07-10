import {
	Button,
	Callout,
	Card,
	Classes, H2, H6,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Tag
} from '@blueprintjs/core'
import { Alignment } from '@blueprintjs/core/lib/esm/common/alignment'
import React from 'react'
import './App.css'


const App: React.FC = () => {

	return (
		<div>
			<Navbar className={ Classes.DARK }>
				<NavbarGroup align={ Alignment.LEFT }>
					<NavbarHeading>Cannyx</NavbarHeading>
				</NavbarGroup>
				<NavbarGroup align={ Alignment.RIGHT }>
					<NavbarHeading>Blueprint</NavbarHeading>
					<NavbarDivider/>
					<Button minimal={ true } icon="home" text="Home"/>
					<Button minimal={ true } icon="document" text="Files"/>
				</NavbarGroup>
			</Navbar>

			<div id={ 'content' } style={ { margin: 'auto', marginTop: 50, maxWidth: 900 } }>
				<Callout title={ undefined }>
					<Tag minimal={ true } intent={ 'warning' }>TIP</Tag> You can invite unlimited teammates to Cannyx
				</Callout>


				<br/>

				<div className={ 'board-title' }>
					<H2>Boards</H2>
					<Button className={ 'board-create' } intent={ 'success' } icon={ 'add-to-artifact' }>Create</Button>
				</div>

				<Card>
					<div className="board">
						<div className="board-column">
							<H6 className="board-table-title">NAME</H6>
							<p className="board-table-entry-name">This is a board</p>
						</div>
						<div className="board-column">
							<H6 className="board-table-title">POSTS</H6>
							<p className="board-table-entry-name">12</p>
						</div>
					</div>

					{/*Your boards will show up here. <a>Click here to create one</a>.*/ }

				</Card>
			</div>
		</div>

	)
}

export default App
