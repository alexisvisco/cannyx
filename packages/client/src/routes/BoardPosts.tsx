import { Icon } from '@blueprintjs/core'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Card } from 'baseui/card'
import { Checkbox } from 'baseui/checkbox'
import Search from 'baseui/icon/search'
import { StatefulInput } from 'baseui/input'
import { Tag } from 'baseui/tag'
import * as React from 'react'
import { useReducer } from 'react'
import { GoPlus } from 'react-icons/go'
import { UpVote } from '../components/upvote/UpVote'
import './BoardPosts.css'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Radio, StatefulRadioGroup } from 'baseui/radio'
import { getRoadMapStateDescriptor, stateList } from '../components/roadmap/RoadMapState'

interface CheckboxState {
  [t: string]: boolean
}

const initialCheckboxStates = stateList.reduce((prev, curr) => {
  const state = getRoadMapStateDescriptor(curr)
  prev[state.name] = true
  return prev
}, {} as CheckboxState)

console.log(initialCheckboxStates)

const checkboxReducer = (state, action) => {
  console.log(action, state)
  state[action] = !state[action]
  return state
}

export const BoardPosts = () => {

  const [checkboxState, setCheckboxState] = useReducer(checkboxReducer, initialCheckboxStates)

  const SearchIcon = () => {
    return (
      <Block display="flex" alignItems="center" paddingLeft="scale500">
        <Search size="18px"/>
      </Block>
    )
  }

  const StateCheckbox = ({ name, getter, setter }) => {
    return <Checkbox checked={ getter } onChange={ () => setter(name) }>{ name }</Checkbox>
  }

  return <div className="container">
    <div className="board-posts">
      <HeadingLevel>
        <div className="board-posts-sidebar">
          <Button size="compact" startEnhancer={ () => <GoPlus/> }>Create post</Button>

          <br/>

          <Heading styleLevel={ 5 }>Status</Heading>

          {
            Object.entries(checkboxState).map(([key], index) => {
              return <StateCheckbox key={ index } name={ key } getter={ checkboxState[key] }
                                    setter={ setCheckboxState }/>
            })
          }

          <Heading styleLevel={ 5 }>Sort</Heading>

          <StatefulRadioGroup name="sort" initialState={ { value: 'Trending' } }>
            <Radio value="Trending">Trending</Radio>
            <Radio value="Top">Top</Radio>
            <Radio value="Newest">Newest</Radio>
            <Radio value="Oldest">Oldest</Radio>
          </StatefulRadioGroup>

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
                <Heading styleLevel={ 6 }>Feature upvote</Heading>
              </div>
              <div style={ { display: 'flex', flexDirection: 'row', marginLeft: 'auto' } }>
                <Icon style={ { marginTop: '3px', marginRight: '5px' } } color="#e9e9e9" icon="comment"/>
                <div>19</div>
              </div>
            </div>

            <div className="board-posts-post">
              <UpVote vote={ 45 } voted={ true }/>
              <div className="board-posts-post-content">
                <Heading styleLevel={ 6 }>Feature comment</Heading>
                <div>
                  <Tag closeable={ false } variant="light" kind="positive">planned</Tag>
                </div>
              </div>

              <div style={ { display: 'flex', flexDirection: 'row', marginLeft: 'auto' } }>
                <Icon style={ { marginTop: '3px', marginRight: '5px' } } color="#e9e9e9" icon="comment"/>
                <div>1</div>
              </div>
            </div>
          </Card>
        </div>
      </HeadingLevel>

    </div>
  </div>
}