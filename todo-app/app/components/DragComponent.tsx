import React, { useState } from 'react';
import TodoList from "./GetToDoList";
import { ToDoTask } from "@/types/task";
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

type DragProps = {
    initialTasks: ToDoTask[];
    };

const DragComponent: React.FC<DragProps> = ({ initialTasks  }) => {
    const [tasks, setTasks] = useState<ToDoTask[]>(initialTasks );

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
        return;
        }

        const reorderedTasks = Array.from(tasks);
        const [movedTask] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, movedTask);

        // Update the state with the new order of tasks
        setTasks(reorderedTasks);
    };

    return (
        <div>
        <TodoList tasks={tasks} onDragEnd={onDragEnd} />
        </div>
    );
};

export default DragComponent;
