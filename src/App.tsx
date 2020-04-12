import React from 'react';

interface Props {
  age: number;
  tasks: number[];
  onClick(): void;
  addTask(): void;
}

const clickMe = 'Click me';
const addTitle = 'Add tasks';

export const App: React.FunctionComponent<Props> = ({ age, tasks, onClick, addTask }) => (
  <div>
    <h1>Age: {age}</h1>
    <button type="submit" onClick={onClick}>
      {clickMe}
    </button>
    <ul>
      {tasks.map((task) => {
        return <li key={task}>{task}</li>;
      })}
    </ul>
    <button type="submit" onClick={addTask}>
      {addTitle}
    </button>
  </div>
);
