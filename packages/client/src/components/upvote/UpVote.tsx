import * as React from 'react'
import { Icon } from '@blueprintjs/core'
import './UpVote.css'

interface IProps {
  vote: number,
  voted: boolean
}

const colorVoted = '#336791'
const colorNotVoted = '#8A9BA8'

export const UpVote = ({ vote, voted }: IProps) => {
  return <div>
    <div className="upvote">
      <Icon icon="chevron-up" iconSize={ 20 } color={ voted ? colorVoted : colorNotVoted }/>
      <div className="upvote-count">{ vote }</div>
    </div>
  </div>
}