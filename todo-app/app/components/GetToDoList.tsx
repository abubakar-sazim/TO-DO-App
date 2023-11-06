"use client"

import { ToDoTask } from "@/types/task";
import Task from "./Task";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface TodoListProps {
    tasks: ToDoTask[];
    }

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return; // No destination, no need to reorder
        }
    
        // Implement the logic to reorder tasks based on result.source.index and result.destination.index
        const reorderedTasks = Array.from(tasks);
        const [movedTask] = reorderedTasks.splice(result.source.index, 1);
        reorderedTasks.splice(result.destination.index, 0, movedTask);

    };
    
    return (
        <div className="overflow-x-auto">
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="tasks">
            {(provided) => (
                <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                >
                {tasks.map((task, index) => (
                <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                        <li
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <Task task={task} />
                        </li>
                    )}
                </Draggable>
            ))}
                {provided.placeholder}
                </ul>
            )}
            </Droppable>
        </DragDropContext>
        </div>
    );
    };
    

export default TodoList;