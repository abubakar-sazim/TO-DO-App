export interface ITask {
    id: string,
    text: string
    }

const baseUrl = 'http://localhost:8000/';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
}