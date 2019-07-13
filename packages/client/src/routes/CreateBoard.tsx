import React from 'react'
import { Button, Card, H2, H5, InputGroup } from '@blueprintjs/core'
import './CreateBoard.css'

export const CreateBoard: React.FC = () => {
  return <div className="container">
    <Card className="create-board-fixed">
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
    </Card>
  </div>
}