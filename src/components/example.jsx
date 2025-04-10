import React from 'react';

// Fake task data
const tasks = [
  { id: 1, title: 'Complete React Project', description: 'Finish all components for the React project', status: 'In Progress' },
  { id: 2, title: 'Attend Meeting', description: 'Participate in the team stand-up meeting', status: 'Completed' },
  { id: 3, title: 'Submit Report', description: 'Prepare and submit the monthly report to the manager', status: 'Pending' },
  { id: 4, title: 'Code Review', description: 'Review PRs from the development team', status: 'In Progress' },
  { id: 5, title: 'Write Documentation', description: 'Write documentation for the newly developed features', status: 'Pending' }
];

const TaskList = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Task List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <strong>Status: </strong><span>{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;