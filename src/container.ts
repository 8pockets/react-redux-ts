import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { App as Component } from './App';
import { SetAge, IAction, SetTask } from './actions';
import { IAppState } from './store';

const mapStateToProps = (state: IAppState) => {
  return {
    age: state.app.age,
    tasks: state.app.tasks,
  };
};

const mapDispatchToProps = (dipatch: Dispatch<IAction>) => {
  return {
    onClick: () => dipatch(SetAge(Math.floor(Math.random() * 100))),
    addTask: () => dipatch(SetTask(Math.floor(Math.random() * 100))),
  };
};

export const App = compose(connect(mapStateToProps, mapDispatchToProps))(Component);
