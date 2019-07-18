import { Block } from 'baseui/block'
import { Button, KIND } from 'baseui/button'
import { Card } from 'baseui/card'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Input, StatefulInput } from 'baseui/input'
import React, { useState } from 'react'

import './CreateBoard.css'
import history from '../history'

export const CreateBoard: React.FC = () => {

	const [name, setName] = useState('')

	const handleBackNavigation = () => history.goBack()

	return <div className="container">
		<div className="create-board-fixed">
			<Card>
				<HeadingLevel>
					<Heading styleLevel={ 4 }>
						Create a new board
					</Heading>
					<HeadingLevel>
						<Heading styleLevel={ 5 }>
							A board is a place where people can post and vote on ideas for a specific
							topic.
						</Heading>

						<Input
							placeholder="Board name"
							onChange={ (e) => setName(e.currentTarget.value) }
						/>
						<br/>

						<StatefulInput
							startEnhancer="cannyx.io/boards/"
							placeholder="Public URL suffix"
							initialState={ { value: name } }
						/>

						<br/>

						<div style={ { display: 'flex' } }>
							<div style={ { marginLeft: 'auto' } }>
								<Button onClick={ handleBackNavigation } kind={ KIND.secondary } size="compact">Cancel</Button>
								<Block as="span" marginLeft="scale300"/>
								<Button size="compact">Create</Button>
							</div>
						</div>
					</HeadingLevel>
				</HeadingLevel>
			</Card>
		</div>
	</div>
}

/*
 <H2>Create a new board</H2>
      <br/>
      <H5 style={ { fontWeight: 'normal' } }>A board is a place where people can post and vote on ideas for a specific
        topic.
      </H5>
      <br/>

      <InputGroup style={ { height: '45px' } }
                  placeholder="Name"
                  large={ true }
                  type={ 'text' }
      />

      <br/>
      <InputGroup style={ { height: '45px' } }
                  placeholder="URL Suffix"
                  large={ true }
                  type={ 'text' }
      />

      <br/>

      <Button intent="primary" style={ { marginLeft: 'auto' } }>Create</Button>
 */