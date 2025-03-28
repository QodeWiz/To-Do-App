import React from 'react';
import { Task } from './Task';

const tasks = [
    {_id: 1, text: 'Water plants'},
    {_id: 2, text: 'Buy Cat Food'},
    {_id: 3, text: 'Chill with my cat named Nova'}
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor</h1>

    <ul>
    { tasks.map(task => <Task key={ task._id } task={ task }/>) }
    </ul>
  </div>
)