import React from 'react';

const tasks = [
    { id: 1, title: "Complete React", description: "Finish all components for the React project", status: "In Progress" },
    { id: 2, title: "Cooking Iftar", description: "Cooking the iftar for today", status: "Not start" },
    { id: 3, title: "Complete Review", description: "Complete review for listview React component code", status: "Done" },
    { id: 4, title: "Homework", description: "Do Kotlin homework", status: "Done" },
    { id: 5, title: "Android project testing", description: "Test all the cases of the login page in android project", status: "In Progress" },
    { id: 6, title: "Submit Report", description: "Prepare and submit the monthly report", status: "Not start" }
];

const ListView = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Tasks List</h2>
            <ul style={{ padding: 0, listStyleType: 'none' }}>
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

export default ListView;