import { Button, Classes, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core'
import { Alignment } from '@blueprintjs/core/lib/esm/common/alignment'
import React from 'react'
import { Boards } from '../components/board/Boards'
import { RoadMapOverview } from '../components/roadmap/RoadMapOverview'
import { Tip } from '../components/tip/Tip'

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar className={Classes.DARK}>
        <div style={{ margin: '0 auto', width: '900px' }}>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Cannyx</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.RIGHT}>
            <Button minimal={true} icon="people" text="People"/>
            <Button minimal={true} icon="document" text="Changelog"/>
          </NavbarGroup>
        </div>

      </Navbar>

      <div id={'content'} style={{ margin: 'auto', marginTop: 50, maxWidth: 900 }}>
        <Tip/>

        <br/>

        <Boards boards={[
          { name: 'Front', posts: 12 },
          { name: 'Backend', posts: 89 },
          { name: 'Services', posts: 1 }
        ]}/>

        <br/>

        <RoadMapOverview/>

      </div>
    </div>
  )
}

export default Dashboard
