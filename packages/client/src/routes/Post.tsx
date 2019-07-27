import { Heading, HeadingLevel } from 'baseui/heading'
import * as React from 'react'
import { Card } from 'baseui/card'
import { UpVote } from '../components/upvote/UpVote'
import { StatefulTabs, Tab } from 'baseui/tabs'
import { StatefulTextarea as Textarea } from 'baseui/textarea'
import { Button, SIZE } from 'baseui/button'
import { getRoadMapStateDescriptor, stateList } from '../components/roadmap/RoadMapState'
import { useState } from 'react'
import { Select } from 'baseui/select'

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

        <StatefulTabs initialState={ { activeKey: '0' } }
                      overrides={ { TabBar: { style: { backgroundColor: 'white' } } } }>
          <Tab title="Public">Blabla</Tab>
          <Tab title="Internal">Blabla 2</Tab>
        </StatefulTabs>

        <br/>

        <div style={ { display: 'flex', flexDirection: 'column' } }>
          <Textarea
            placeholder="Detail your feature request"
          />
          <br/>
          <div style={ { marginLeft: 'auto' } }>
            <Button size={ SIZE.compact }>Add comment</Button>
          </div>
        </div>
      </Card>

    </HeadingLevel>
  </div>
}