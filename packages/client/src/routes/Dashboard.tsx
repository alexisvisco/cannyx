import React from 'react'
import {Boards} from '../components/board/Boards'
import {RoadMapOverview} from '../components/roadmap/RoadMapOverview'
import {Tip} from '../components/tip/Tip'
import {Heading, HeadingLevel} from "baseui/heading";


const Dashboard: React.FC = () => {
    return (
        <div className="container">

            <HeadingLevel>

                <Tip/>

                <br/>


                <Heading styleLevel={5}>Boards</Heading>

                <Boards boards={[
                    {name: 'Front', posts: 12},
                    {name: 'Backend', posts: 89},
                    {name: 'Services', posts: 1}
                ]}/>

                <Heading styleLevel={5}>Roadmap</Heading>

                <RoadMapOverview/>

            </HeadingLevel>

        </div>
    )
}

export default Dashboard
