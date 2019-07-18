import './RoadMapOverview.css'
import * as RoadMapState from './RoadMapState'
import React from 'react'
import { UpVote } from '../upvote/UpVote'
import { Card } from 'baseui/card'

export const RoadMapOverview = () => {

  const RoadMapHeader = (stateDescriptor: RoadMapState.RoadMapStateDescriptor) => {
    return <div className={ 'roadmap-header' }>
      <div className={ 'roadmap-dot' } style={ { backgroundColor: stateDescriptor.color } }/>
      <div>{ stateDescriptor.name }</div>
    </div>
  }

  return <div className={ 'roadmap' }>
    {
      RoadMapState.stateList.slice(0, 3).map((state, key) => {
        const stateDescriptor = RoadMapState.getRoadMapStateDescriptor(state)

        return <Card title={ RoadMapHeader(stateDescriptor) } key={ key }
                     overrides={ { Root: { style: { width: '32%' } }, Title: { style: { display: 'flex',
                       alignItems: 'center'} } } }>


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
}