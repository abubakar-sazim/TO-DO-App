import { ToDoTask } from "@/types/task";
import Task from "./Task";

interface TodoListProps {
    tasks: ToDoTask[];
    }

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            {tasks.map((task, index) => (
            <div className="" key={index} draggable>
                <Task key={task.id} task={task} />
            </div>
            
            ))}
            
            
            </div>
    );
}

export default TodoList;