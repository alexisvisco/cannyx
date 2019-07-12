import * as React from 'react'
import { Button, Card, H2, H6, Icon, Position, Tooltip } from '@blueprintjs/core'
import './Boards.css'
import history from '../../history'


interface IProps {
  boards: {
    name: string,
    posts: number
  }[]
}


export const Boards = ({ boards }: IProps) => {

  const handleCreate = () => history.push('/boards/create')

  return <div>
    <div className={ 'board-title' }>
      <H2>Boards</H2>
      <Button onClick={ handleCreate } className={ 'board-create' } intent={ 'success' }
              icon={ 'add-to-artifact' }>Create</Button>
    </div>

    <Card>
      <div className="board">
        <div className="board-column">
          <H6 className="board-table-title">NAME</H6>
          {
            boards.map((e, key) =>
              <div key={ key }>
                <p className="board-table-entry">{ e.name }</p>
              </div>
            )
          }

        </div>
        <div className="board-column">
          <H6 className="board-table-title">POSTS</H6>
          {
            boards.map((e, key) =>
              <div key={ key }>
                <p className="board-table-entry">{ e.posts }</p>
              </div>
            )
          }
        </div>

        <div className="board-column">
          <H6 className="board-table-title">ACTIONS</H6>
          {
            boards.map((_, key) =>
              <div key={ key } className="board-table-entry">
                <Icon className={ 'board-icon' } icon={ 'link' } iconSize={ 16 }/>
                <Tooltip content="Public board" position={ Position.TOP }>
                  <Icon className={ 'board-icon' } icon={ 'eye-open' } iconSize={ 16 }/>
                </Tooltip>

                <Icon className={ 'board-icon' } icon={ 'settings' } iconSize={ 16 }/>
              </div>
            )
          }
        </div>
      </div>
    </Card>
  </div>
}
