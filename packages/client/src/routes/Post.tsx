import { Heading, HeadingLevel } from 'baseui/heading'
import * as React from 'react'
import { useState } from 'react'
import { Card } from 'baseui/card'
import { UpVote } from '../components/upvote/UpVote'
import { StatefulTextarea as Textarea } from 'baseui/textarea'
import { Button, SIZE } from 'baseui/button'
import { getRoadMapStateDescriptor, stateList } from '../components/roadmap/RoadMapState'
import { Select } from 'baseui/select'
import { Avatar } from 'baseui/avatar'
import { GoEyeClosed, GoStar } from 'react-icons/go'
import { Block } from 'baseui/block'
import { Tag } from 'baseui/tag'

const statusOptions = stateList.map(e => ({
  id: getRoadMapStateDescriptor(e).name, name: getRoadMapStateDescriptor(e).name
}))

const StatusCheckbox = () => {
  const [value, setValue] = useState<any>([statusOptions[0]])

  return (
    <Select
      options={ statusOptions }
      labelKey="id"
      valueKey="name"
      searchable={ false }
      clearable={ false }
      onChange={ ({ value }) => setValue(value) }
      value={ value }
    />
  )
}

interface IComment {
  author: string,
  content: string,
  isAdmin: boolean,
  isInternal: boolean
}

const Comment = ({ author, content, isAdmin, isInternal }: IComment) => {
  return <div style={ { display: 'flex' } }>
    <div>
      <Avatar name={ author }/>
    </div>
    <div style={ { display: 'flex', flexDirection: 'column', marginLeft: '20px', marginTop: '8px' } }>
      <div style={ { display: 'flex' } }>
        { isAdmin ?
          <GoStar color="#276ef1" style={ { display: 'block', marginRight: '10px', marginTop: 'auto', marginBottom: 'auto' } }/> : '' }
        <p style={ { margin: '0' } }>
          <strong style={ { cursor: 'pointer' } }>{ author }</strong>
          <small style={ { marginLeft: '10px' } }>19h ago</small>
          { isInternal ?
            <div style={ { marginLeft: '10px', display: 'inline' } }><Tag closeable={ false } variant='light'
                                                                          kind="warning">
              internal
            </Tag></div> : '' }
        </p>
      </div>
      <p>{ content }</p>
    </div>
  </div>
}


export const Post = () => {
  return <div className="container">
    <HeadingLevel>
      <div style={ { display: 'flex', alignItems: 'center' } }>
        <Heading styleLevel={ 4 }>Post description</Heading>
      </div>

      <Card>
        <div style={ { display: 'flex' } }>
          <UpVote vote={ 32 } voted={ true }/>
          <div style={ { display: 'flex', flexDirection: 'column' } }>
            <div style={ { display: 'flex' } }>
              <Heading styleLevel={ 6 }>Feature upvote</Heading>
              <div style={ { marginLeft: 'auto', width: '200px' } }>
                <StatusCheckbox/>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam autem dolore
              excepturi, exercitationem, incidunt iure magni minus molestiae neque numquam odit provident
              quasi quisquam reiciendis sed sequi suscipit unde?</p>
          </div>
        </div>

        <br/>
        <br/>
        <br/>

        <div style={ { display: 'flex', flexDirection: 'column' } }>
          <Textarea
            placeholder="Comment on this feature request"
          />
          <br/>
          <div style={ { marginLeft: 'auto', display: 'flex' } }>
            <Button kind="secondary" size={ SIZE.compact } endEnhancer={ <GoEyeClosed/> }>Internal</Button>
            <Block marginRight={ '10px' }/>
            <Button size={ SIZE.compact }>Public</Button>
          </div>
        </div>
        <br/>

        <Comment isInternal={ false } isAdmin author="Alex Tww." content=" amet, consectetur adipisicing elit. Animi aperiam autem dolore
              excepturi, exercitationem, incidunt iure magni minus molestiae neque numquam odit provident
              quasi quisquam reiciendis sed sequi suscipit"/>

        <Comment isInternal isAdmin author="Ifff" content=" amet, consectetur adipisicing elit. Animi aperiam autem dolore
              excepturi, exercitationem, incidunt iure mag   "/>

        <Comment isAdmin={ false } isInternal={ false } author="Rhod Fha" content="@Ifff ok"/>
      </Card>

    </HeadingLevel>
  </div>
}