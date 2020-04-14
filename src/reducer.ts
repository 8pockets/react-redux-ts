import { AppEvents } from './events';
import { IAction } from './actions';

const initState: IState = {
  name: '',
  age: 1223,
  tasks: [],
};

export interface IState {
  name: string;
  age: number;
  tasks: number[];
}

export const reducer = (state: IState = initState, action: IAction): IState => {
  switch (action.type) {
    case AppEvents.SET_NAME:
      return { ...state, name: action.payload };

    case AppEvents.SET_AGE:
      return { ...state, age: action.payload };

    case AppEvents.SET_TASK:
      state.tasks.push(action.payload);
      return { ...state, tasks: state.tasks };

    default:
      return state;
  }
};
