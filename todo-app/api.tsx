import { ToDoTask } from "./types/task";

const baseUrl = 'http://localhost:8000';

export async function GetTasks() {
    const res = await fetch('http://localhost:8000/tasks', {
        next: {
        revalidate: 0 // use 0 to opt out of using cache
        }
    })

    return res.json();
}


export const addTodo = async (todo: ToDoTask): Promise<ToDoTask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
    }

// Edit todo
export const editTodo = async (todo: ToDoTask): Promise<ToDoTask> => {
const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
})
const updatedTodo = await res.json();
return updatedTodo;
}

// Delete todo
export const deleteTodo = async (id: string): Promise<void> => {
await fetch(`${baseUrl}/tasks/${id}`, {
    method: 'DELETE',
})
}