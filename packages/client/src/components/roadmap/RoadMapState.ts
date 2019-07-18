export enum State {
  Planned,
  InProgress,
  Done,
  Complete,
  Closed,
}

export const stateList = [State.Planned, State.InProgress, State.Done, State.Complete, State.Closed]

export interface RoadMapStateDescriptor {
  color: string,
  name: string
}

export const getRoadMapStateDescriptor = (state: State): RoadMapStateDescriptor => {
  switch (state) {
    case State.InProgress:
      return { color: '#48AFF0', name: 'In Progress' }
    case State.Planned:
      return { color: '#C274C2', name: 'Planned' }
    case State.Done:
      return { color: '#62D96B', name: 'Done' }
    case State.Complete:
      return { color: '#30a800', name: 'Complete' }
    case State.Closed:
      return { color: '#d93742', name: 'Closed' }
  }
}