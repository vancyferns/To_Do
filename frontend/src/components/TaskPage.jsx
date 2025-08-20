import React, { useState } from 'react';
import AddTask from './AddTask';
import Task from './Task';

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  // Add new task
  function handleAddTask(newTask) {
    if (newTask.trim() === "") return; // prevent empty
    setTasks([...tasks, { text: newTask, completed: false }]);
  }

  // Toggle completed state
  function handleToggleTask(index) {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  // Delete task
  function handleDeleteTask(indexToDelete) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#EE82EE] shadow-lg rounded-2xl">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">
        To-do List
      </h1>

      {/* Add Task Section */}
      <div className="mb-6">
        <AddTask onAddTask={handleAddTask} />
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onToggle={() => handleToggleTask(index)}
              onDelete={() => handleDeleteTask(index)}
            />
          ))
        ) : (
          <p className="text-gray-600 text-center">No tasks yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}

export default TaskPage;
