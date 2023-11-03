import { GetTasks } from "@/api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/GetToDoList";


export default async function Home() {

  const tasks = await GetTasks();

  return (
      <main className='max-w-4xl mx-auto mt-4'>
        <div className='text-center my-5 flex-column gap-4'>
          <h1 className='text-2xl font-bold text-emerald-600'>TO DO APP</h1>
          <AddTask />
          <div>
          <ToDoList tasks={tasks} />
          </div>
          <div>
          </div>
        </div>
      </main>
  )
}

