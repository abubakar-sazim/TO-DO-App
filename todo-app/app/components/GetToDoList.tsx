import { ToDoTask } from "@/types/task";
import Task from "./Task";

interface TodoListProps {
    tasks: ToDoTask[];
    }

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    // const tasks = await GetTasks()
    // console.log(tasks)
    return (
        <div className="overflow-x-auto">
            <table className="table">
            {/* head */}
            <thead>
                <tr>
                <th>Tasks</th>
                <th>Actions</th>
                <th>State</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                <Task key={task.id} task={task} />
                ))}
            </tbody>
            </table>
            </div>
    );
}

export default TodoList;