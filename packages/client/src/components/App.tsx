import {
    Button,
    Callout,
    Card,
    Classes, H2, H4, H6, Icon,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading, Position,
    Tag, Tooltip
} from '@blueprintjs/core'
import {Alignment} from '@blueprintjs/core/lib/esm/common/alignment'
import React from 'react'
import './App.css'


const App: React.FC = () => {

    const data = [
        {name: "Front", posts: 12},
        {name: "Backend", posts: 89},
        {name: "Services", posts: 1},
    ]

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

                <div className={'board-title'}>
                    <H2>Boards</H2>
                    <Button className={'board-create'} intent={'success'} icon={'add-to-artifact'}>Create</Button>
                </div>

                <Card>
                    <div className="board">
                        <div className="board-column">
                            <H6 className="board-table-title">NAME</H6>
                            {
                                data.map(e =>
                                    <div>
                                        <p className="board-table-entry">{e.name}</p>
                                    </div>
                                )
                            }

                        </div>
                        <div className="board-column">
                            <H6 className="board-table-title">POSTS</H6>
                            {
                                data.map(e =>
                                    <div>
                                        <p className="board-table-entry">{e.posts}</p>
                                    </div>
                                )
                            }
                        </div>

                        <div className="board-column">
                            <H6 className="board-table-title">ACTIONS</H6>
                            {
                                data.map(_ =>
                                    <div className="board-table-entry">
                                        <Icon className={'board-icon'} icon={'link'} iconSize={16}/>
                                        <Tooltip content="Public board" position={Position.TOP}>
                                            <Icon className={'board-icon'} icon={'eye-open'} iconSize={16}/>
                                        </Tooltip>

                                        <Icon className={'board-icon'} icon={'settings'} iconSize={16}/>
                                    </div>
                                )
                            }

                        </div>
                    </div>

                </Card>

                <br/>

                <div className={'board-title'}>
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
