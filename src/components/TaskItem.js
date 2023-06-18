import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, onDelete }) => {
  const deleteTask = async () => {
    try {
      await axios.delete(`/api/tasks/${task._id}`);
      onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      {task.title} - {task.description}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;