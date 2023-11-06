"use client";

import { ToDoTask } from "@/types/task";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ToDoTask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const [todotasks, setTodoTasks] = React.useState([tasks]);

  //save reference for dragItem and dragOverItem
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const handleSort = () => {
    let _todotasks = [...todotasks];
    const draggedItemContent = _todotasks.splice(dragItem.current, 1)[0];
    _todotasks.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;
    setTodoTasks(todotasks);
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
