import {
    Button,
    Callout,
    Card,
    Classes,
    H2,
    H4,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Tag
} from '@blueprintjs/core'
import {Alignment} from '@blueprintjs/core/lib/esm/common/alignment'
import React from 'react'
import './App.css'
import {Boards} from "./board/Board";


const App: React.FC = () => {

    return (
        <div>
            <Navbar className={Classes.DARK}>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>Cannyx</NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <NavbarHeading>Blueprint</NavbarHeading>
                    <NavbarDivider/>
                    <Button minimal={true} icon="home" text="Home"/>
                    <Button minimal={true} icon="document" text="Files"/>
                </NavbarGroup>
            </Navbar>

            <div id={'content'} style={{margin: 'auto', marginTop: 50, maxWidth: 900}}>
                <Callout title={undefined}>
                    <Tag minimal={true} intent={'warning'}>TIP</Tag> You can invite unlimited teammates to Cannyx
                </Callout>


                <br/>

                <Boards boards={[
                    {name: "Front", posts: 12},
                    {name: "Backend", posts: 89},
                    {name: "Services", posts: 1},
                ]}/>

                <br/>

                <div className={'roadmap-title'}>
                    <H2>Roadmap</H2>
                </div>


                <div className={'roadmap'}>
                    <Card className={'roadmap-element roadmap-element-padd'}>
                        <div className={'roadmap-header'}>
                            <div className={'roadmap-dot'}></div>
                            <H4>Planned</H4>
                        </div>
                    </Card>
                    <Card className={'roadmap-element roadmap-element-padd'}>
                        <div className={'roadmap-header'}>
                            <div className={'roadmap-dot'}></div>
                            <H4>In Progress</H4>
                        </div>
                    </Card>
                    <Card className={'roadmap-element'}>
                        <div className={'roadmap-header'}>
                            <div className={'roadmap-dot'}></div>
                            <H4>Done</H4>
                        </div>
                    </Card>
                </div>
            </div>
        </div>

    )
}

export default App
