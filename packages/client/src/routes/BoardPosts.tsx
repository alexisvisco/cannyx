import {
  Button,
  Card,
  Checkbox,
  FileInput,
  H5,
  H6,
  Icon,
  InputGroup,
  Radio,
  RadioGroup,
  TextArea
} from '@blueprintjs/core'
import * as React from 'react'
import './BoardPosts.css'
import { UpVote } from '../components/upvote/UpVote'

export const BoardPosts = () => {


  return <div className="container">
    <div className="board-posts">
      <div className="board-posts-sidebar">
        <Card className="board-posts-create-posts">
          <div className="card-title">Create a post</div>
          <br/>
          <InputGroup style={ { height: '45px' } }
                      placeholder="Title"
                      large={ true }
                      type={ 'text' }
          />
          <br/>
          <TextArea
            style={ { width: '100%' } }
            placeholder="Detail"
            growVertically={ true }
            large={ true }
          />
          <br/>
          <br/>
          <FileInput text="Image?"/>
          <br/>
          <br/>
          <div style={ { width: '100%', display: 'flex' } }>
            <Button intent="primary" style={ { marginLeft: 'auto' } }>Create Post</Button>
          </div>
        </Card>

        <br/>
        <br/>

        <H5>Status</H5>

        <Checkbox checked={ true } label="Open"/>
        <Checkbox checked={ true } label="Under review"/>
        <Checkbox checked={ true } label="Planned"/>
        <Checkbox checked={ true } label="In Progress"/>
        <Checkbox label="Complete"/>
        <Checkbox label="Closed"/>

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
      <Card style={ { width: '100%', marginLeft: '35px', height: 'fit-content' } }>
        <InputGroup style={ { boxShadow: 'none' } }
                    leftIcon="search"
                    placeholder="Search posts..."
                    round={ true }
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
            <div className="board-posts-post-status" style={{color: 'green'}}>PLANNED</div>
          </div>

          <div style={ { display: 'flex', flexDirection: 'row', marginLeft: 'auto' } }>
            <Icon style={ { marginTop: '3px', marginRight: '5px' } } color="#e9e9e9" icon="comment"/>
            <div>1</div>
          </div>
        </div>
      </Card>
    </div>
  </div>
}