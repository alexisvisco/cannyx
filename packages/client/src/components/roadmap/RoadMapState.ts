export enum States {
  Planned,
  InProgress,
  Done
}

export const enumList = [States.Planned, States.InProgress, States.Done]

export interface RoadMapStateDescriptor {
  color: string,
  name: string
}

export const getRoadMapStateDescriptor = (state: States): RoadMapStateDescriptor => {
  switch (state) {
    case States.InProgress:
      console.log('here')
      return { color: '#48AFF0', name: 'In Progress' }
    case States.Planned:
      console.log('here 1')
      return { color: '#C274C2', name: 'Planned' }
    case States.Done:
      console.log('here 2')
      return { color: '#62D96B', name: 'Done' }
  }
}