import './RoadMapOverview.css'
import * as RoadMapState from './RoadMapState'
import { Card, H2, H4 } from '@blueprintjs/core'
import React from 'react'
import { UpVote } from '../upvote/UpVote'

export const RoadMapOverview = () => {
  return <div>
    <div className={ 'roadmap-title' }>
      <H2>Roadmap</H2>
    </div>

    <div className={ 'roadmap' }>
      {
        RoadMapState.enumList.map((state, key) => {
          const stateDescriptor = RoadMapState.getRoadMapStateDescriptor(state)

          return <Card key={ key } className={ 'roadmap-element' }>
            <div className={ 'roadmap-header' }>
              <div className={ 'roadmap-dot' } style={ { backgroundColor: stateDescriptor.color } }/>
              <H4>{ stateDescriptor.name }</H4>
            </div>

            <div className="roadmap-feature">
              <UpVote vote={ 10 } voted={ true }/>

              <div>
                <div className="roadmap-feature-title">Feature upvote</div>
                <div className="roadmap-feature-board-title">Backend</div>
              </div>
            </div>
          </Card>
        })
      }
    </div>
  </div>
}