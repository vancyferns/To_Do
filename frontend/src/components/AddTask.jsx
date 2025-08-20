import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [content, setContent] = useState("");

  function handleAddTask() {
    if (content.trim() === "") return; // prevent empty tasks
    onAddTask(content);
    setContent("");
  }

  return (
    <div className="flex items-center gap-2">
      {/* Input */}
      <input
        type="text"
        placeholder="Add a task..."
        name="newtask"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Button */}
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
