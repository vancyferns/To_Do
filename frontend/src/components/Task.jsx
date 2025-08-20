import React from 'react';
import DeleteIcon from "./icons8-delete.svg";

export default function Task({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center p-3 my-2 bg-[#FAFAD2] rounded-lg shadow-sm ">
      {/* Checkbox */}
      <input 
        type="checkbox" 
        checked={task.completed}
        onChange={onToggle}
        className="mr-3 text-blue-600 rounded-sm form-checkbox"
      />

      {/* Task text */}
      <p
        className={`truncate font-bold w-40 sm:w-60 md:w-80 ${
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }`}
      >
        {task.text}   {/* ✅ use .text here */}
      </p>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Delete button */}
      <button onClick={onDelete}>
        <img src={DeleteIcon} width="20" height="20" alt="Delete" />
      </button>
    </div>
  );
}
