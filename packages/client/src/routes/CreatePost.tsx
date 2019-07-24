import { Block } from 'baseui/block'
import { Button, KIND } from 'baseui/button'
import { Card } from 'baseui/card'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Input, SIZE } from 'baseui/input'
import React from 'react'

import history from '../history'
import { Textarea } from 'baseui/textarea'

export const CreatePost: React.FC = () => {

  const handleBackNavigation = () => history.goBack()

  return <div className="container" style={ { height: '100%' } }>
    <div className="container-fixed">
      <Card>
        <HeadingLevel>
          <Heading styleLevel={ 4 }>
            Create a new post
          </Heading>
          <HeadingLevel>
            <Heading styleLevel={ 5 }>
              A message is a request where people can express themselves about it and vote for it.
            </Heading>
            <Input
              placeholder="Feature request title"
            />

            <br/>

            <Textarea size={ SIZE.compact } placeholder="Description of your request"/>

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
