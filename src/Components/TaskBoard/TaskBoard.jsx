import React from 'react';
import '../../Assets/Stylesheets/components/taskboard.scss';
import Task from './Task/Task';

function TaskBoard() {
  return (
    <div className="columns-sm">
      <section className="task-section section">
        <h2 className="tasks-header-title header-title">Tasks</h2>
        <p className="task-header-desc"></p>
        <div className="tasks-list">
          <Task />
          <Task />
          <Task />
        </div>
      </section>
    </div>
  );
}

export default TaskBoard;
