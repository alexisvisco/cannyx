import * as React from 'react'
import {StatefulList} from "baseui/dnd-list";
import {Card} from "baseui/card";


interface IProps {
    boards: {
        name: string,
        posts: number
    }[]
}


export const Boards = ({boards}: IProps) => {

    return <Card>
        <StatefulList
            removable
            initialState={{
                items: boards.map(e => {
                    return <div style={{cursor: "pointer"}}>
                        {e.name}
                    </div>
                }),
            }}
            onChange={console.log}
        />
    </Card>
}
