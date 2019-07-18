import { H5, H6, Icon, Radio, RadioGroup } from '@blueprintjs/core'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Card } from 'baseui/card'
import { Checkbox } from 'baseui/checkbox'
import Search from 'baseui/icon/search'
import { StatefulInput } from 'baseui/input'
import { Tag } from 'baseui/tag'
import * as React from 'react'
import { useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { UpVote } from '../components/upvote/UpVote'
import './BoardPosts.css'

export const BoardPosts = () => {

	const [checkedOpen, setCheckedOpen] = useState(true)
	const [checkedUnderReview, setCheckedUnderReview] = useState(false)
	const [checkedPlanned, setCheckedPlanned] = useState(false)
	const [checkedInProgress, setCheckedInProgress] = useState(true)
	const [checkedComplete, setCheckedComplete] = useState(false)
	const [checkedClosed, setCheckedClosed] = useState(true)

	const SearchIcon = () => {
		return (
			<Block display="flex" alignItems="center" paddingLeft="scale500">
				<Search size="18px"/>
			</Block>
		)
	}

	return <div className="container">
		<div className="board-posts">
			<div className="board-posts-sidebar">
				<Button size="compact" startEnhancer={ () => <GoPlus/> }>Create post</Button>

				<br/>

				<H5>Status</H5>

				<Checkbox checked={ checkedOpen } onChange={ () => setCheckedOpen(!checkedOpen) }>Open</Checkbox>
				<Checkbox checked={ checkedUnderReview } onChange={ () => setCheckedUnderReview(!checkedUnderReview) }>Under
					review</Checkbox>
				<Checkbox checked={ checkedPlanned } onChange={ () => setCheckedPlanned(!checkedPlanned) }>Planned</Checkbox>
				<Checkbox checked={ checkedInProgress } onChange={ () => setCheckedInProgress(!checkedInProgress) }>In
					Progress</Checkbox>
				<Checkbox checked={ checkedComplete }
									onChange={ () => setCheckedComplete(!checkedComplete) }>Complete</Checkbox>
				<Checkbox checked={ checkedClosed } onChange={ () => setCheckedClosed(!checkedClosed) }>Closed</Checkbox>

				<br/>

				<H5>Sort</H5>

				<RadioGroup
					onChange={ () => console.log() }

				>
					<Radio label="Trending" value="trending"/>
					<Radio label="Top" value="top"/>
					<Radio label="Newest" value="newest"/>
					<Radio label="Oldest" value="oldest"/>
				</RadioGroup>

			</div>
			<div style={ { width: '100%', marginLeft: '35px', height: 'fit-content' } }>
				<Card>
					<StatefulInput
						overrides={ { Before: SearchIcon } }
						placeholder="Search post"
					/>

					<br/>
					<div className="board-posts-post">
						<UpVote vote={ 12 } voted={ true }/>
						<div className="board-posts-post-content">
							<H6>Feature upvote</H6>
						</div>
						<div style={ { display: 'flex', flexDirection: 'row', marginLeft: 'auto' } }>
							<Icon style={ { marginTop: '3px', marginRight: '5px' } } color="#e9e9e9" icon="comment"/>
							<div>19</div>
						</div>
					</div>

					<div className="board-posts-post">
						<UpVote vote={ 45 } voted={ true }/>
						<div className="board-posts-post-content">
							<H6>Feature upvote</H6>
							<Tag closeable={ false } variant="outlined" kind="positive">planned</Tag>
						</div>

						<div style={ { display: 'flex', flexDirection: 'row', marginLeft: 'auto' } }>
							<Icon style={ { marginTop: '3px', marginRight: '5px' } } color="#e9e9e9" icon="comment"/>
							<div>1</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	</div>
}