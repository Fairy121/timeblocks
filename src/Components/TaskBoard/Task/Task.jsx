import React from 'react';
import './task.scss';

function Task() {
  return (
    <div className="task-item list-item">
      <div className="task-wrapper">
        <div className="task-header">
          <h4 className="task-header-title header-title-sm">Learn how to code</h4>
          <p className="task-time-setting">10/23/2021</p>
        </div>
        <div className="task-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt porttitor nibh
          vitae bibendum. Quisque ultricies volutpat lorem, a fermentum ante.
        </div>
      </div>
    </div>
  );
}

export default Task;
