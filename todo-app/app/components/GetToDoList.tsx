/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ToDoTask } from "@/types/task";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ToDoTask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const [todotasks, setTodoTasks] = React.useState([tasks]);
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const handleSort = () => {
    const _todotasks = [...todotasks];
    const draggedItemContent = _todotasks[0].splice(dragItem.current, 1)[0];
    _todotasks[0].splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    setTodoTasks(_todotasks);
  };

  return (
    <div className="overflow-x-auto">
      {tasks.map((task, index) => (
        <div
          className="font-bold text-lg border-spacing-3 border-s-success-content"
          key={index}
          draggable
          onDragStart={() => (dragItem.current = index)}
          onDragEnter={() => (dragOverItem.current = index)}
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