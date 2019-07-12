import React from 'react'
import { Boards } from '../components/board/Boards'
import { RoadMapOverview } from '../components/roadmap/RoadMapOverview'
import { Tip } from '../components/tip/Tip'


const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <Tip/>

      <br/>

      <Boards boards={ [
        { name: 'Front', posts: 12 },
        { name: 'Backend', posts: 89 },
        { name: 'Services', posts: 1 }
      ] }/>

      <br/>

      <RoadMapOverview/>
    </div>
  )
}

export default Dashboard
