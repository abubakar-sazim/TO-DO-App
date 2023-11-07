"use client";

import { ToDoTask } from "@/types/task";
import React from "react";
import Task from "./Task";
import { Draggable } from "react-drag-reorder";

interface TodoListProps {
  tasks: ToDoTask[];
}

// const updateJsonFile = async(data) => {
//   const updatedJson = JSON.stringify(data);
//   const URL = "http://localhost:8000";

//   await fetch(URL, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: updatedJson,
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log("JSON file updated successfully.");
//       } else {
//         console.error("Failed to update JSON file.");
//       }
//     })
//     .catch((error) => {
//       console.error("Error updating JSON file:", error);
//     });
// };

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const [todotasks, setTodoTasks] = React.useState([tasks]);
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const handleSort = () => {
    let _todotasks = [...todotasks];
    const draggedItemContent = _todotasks[0].splice(dragItem.current, 1)[0];
    _todotasks[0].splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    setTodoTasks(_todotasks);

    // updateJsonFile(_todotasks);
  };

  return (
    <div className="overflow-x-auto">
      {tasks.map((task, index) => (
        <div
          className="font-bold text-lg border-spacing-3 border-s-success-content"
          key={index}
          draggable
          onDragStart={(e) => (dragItem.current = index)}
          onDragEnter={(e) => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          <table className="table">
            <tbody>
              <Task key={task.id} task={task} />
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
