import './RoadMapOverview.css'
import * as RoadMapState from './RoadMapState'
import {H4} from '@blueprintjs/core'
import React from 'react'
import {UpVote} from '../upvote/UpVote'
import {Card} from "baseui/card";

export const RoadMapOverview = () => {


    return <div className={'roadmap'}>
        {
            RoadMapState.enumList.map((state, key) => {
                const stateDescriptor = RoadMapState.getRoadMapStateDescriptor(state)

                return <Card key={key} overrides={{Root: {style: {width: "32%"}}}}>
                    <div className={'roadmap-header'}>
                        <div className={'roadmap-dot'} style={{backgroundColor: stateDescriptor.color}}/>
                        <H4>{stateDescriptor.name}</H4>
                    </div>

                    <div className="roadmap-feature">
                        <UpVote vote={10} voted={true}/>

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