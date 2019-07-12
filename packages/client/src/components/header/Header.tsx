import { Alignment, Button, Classes, NavbarGroup, NavbarHeading, Navbar } from '@blueprintjs/core'
import React from 'react'
import history from '../../history'

export const Header = () => {
  const handleHome = () => history.push('/')

  return <div>
    <Navbar className={Classes.DARK}>
      <div style={{ margin: '0 auto', width: '900px' }}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading onClick={handleHome} style={{cursor: 'pointer'}}>Cannyx</NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button minimal={true} icon="people" text="People"/>
          <Button minimal={true} icon="document" text="Changelog"/>
        </NavbarGroup>
      </div>

    </Navbar>
  </div>
}
