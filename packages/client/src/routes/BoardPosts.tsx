import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { Card } from 'baseui/card'
import { Checkbox } from 'baseui/checkbox'
import { StatefulInput } from 'baseui/input'
import { Tag } from 'baseui/tag'
import * as React from 'react'
import { useReducer } from 'react'
import { GoComment, GoPlus, GoSearch } from 'react-icons/go'
import { UpVote } from '../components/upvote/UpVote'
import './BoardPosts.css'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Radio, StatefulRadioGroup } from 'baseui/radio'
import { getRoadMapStateDescriptor, RoadMapStateDescriptor, State, stateList } from '../components/roadmap/RoadMapState'
import history from '../history'

interface CheckboxState {
  [t: string]: boolean
}

interface IProps {
  posts: {
    title: string,
    votes: number,
    voted: boolean,
    comments: number,
    status?: RoadMapStateDescriptor
  }[]
}

const initialCheckboxStates = stateList.reduce((prev, curr) => {
  return { [getRoadMapStateDescriptor(curr).name]: true, ...prev }
}, {} as CheckboxState)


const checkboxReducer = (state, action) => {
  state[action] = !state[action]
  return { ...state }
}

export const BoardPosts = () => {

  const props: IProps = {
    posts: [
      {
        title: 'Hello feature',
        status: getRoadMapStateDescriptor(State.Complete),
        comments: 12,
        voted: false,
        votes: 34
      },
      {
        title: 'Dropbox integration',
        status: getRoadMapStateDescriptor(State.Planned),
        comments: 34,
        voted: false,
        votes: 1
      },
      { title: 'Drag and drop pictures', comments: 1, voted: true, votes: 7 }
    ]
  }

  const [checkboxState, setCheckboxState] = useReducer(checkboxReducer, initialCheckboxStates)

  const SearchIcon = () => {
    return (
      <Block display="flex" alignItems="center" paddingLeft="scale500">
        <GoSearch size="18px"/>
      </Block>
    )
  }

  const StateCheckbox = ({ name, getter, setter, padding }) => {
    return <Checkbox
      overrides={ { Root: { style: { marginBottom: padding + 'px' } }, Label: { style: { fontSize: '16px' } } } }
      checked={ getter }
      onChange={ () => setter(name) }>{ name }</Checkbox>
  }

  const checkboxs = Object.entries(checkboxState)

  const handleCreateBoard = () => history.push("/boards/123/create-post")

  return <div className="container">
    <div className="board-posts">
      <HeadingLevel>
        <div className="board-posts-sidebar">
          <Button size="compact" startEnhancer={ () => <GoPlus/> } onClick={ handleCreateBoard }>Create post</Button>

          <br/>

          <Heading styleLevel={ 5 }>Status</Heading>

          {
            checkboxs.map(([key], index) => {
              return <StateCheckbox key={ index } name={ key } getter={ checkboxState[key] }
                                    setter={ setCheckboxState } padding={ index != checkboxs.length ? 10 : 0 }/>
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

            {

              props.posts.map((post, index) => {
                return <div key={ index }>
                  <div className="board-posts-post">
                    <UpVote vote={ post.votes } voted={ post.voted }/>
                    <div className="board-posts-post-content">
                      <Heading styleLevel={ 6 } marginBottom={ '3px' }
                               overrides={ { Block: { style: { cursor: 'pointer' } } } }>{ post.title }</Heading>
                      <div>
                        {
                          post.status !== undefined
                            ? <Tag closeable={ false } variant="light"
                                   kind={ post.status.intent as any }>{ post.status.name }</Tag>
                            : <div/>
                        }
                      </div>
                    </div>
                    <div style={ { display: 'flex', flexDirection: 'row', marginLeft: 'auto' } }>
                      <div style={ { marginRight: '10px' } }>{ post.comments }</div>
                      <GoComment size="18px" style={ { marginTop: '3px' } } color="black"/>
                    </div>
                  </div>
                </div>
              })

            }
          </Card>
        </div>
      </HeadingLevel>

    </div>
  </div>
}