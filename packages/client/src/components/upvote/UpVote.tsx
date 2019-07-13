import * as React from 'react'
import { Icon } from '@blueprintjs/core'
import './UpVote.css'

interface IProps {
  vote: number,
  voted: boolean,
  hideBorder?: boolean
}

const colorVoted = '#336791'
const colorNotVoted = '#8A9BA8'

export const UpVote = ({ vote, voted, hideBorder = false }: IProps) => {
  console.log(hideBorder)
  return <div>
    <div className="upvote" style={ { border: hideBorder ? 'none' : '1px solid #e9e9e9' } }>
      <Icon icon="chevron-up" iconSize={ 20 }
            color={ voted ? colorVoted : colorNotVoted }/>
      <div className="upvote-count">{ vote }</div>
    </div>
  </div>
}