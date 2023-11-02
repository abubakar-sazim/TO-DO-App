async function GetTasks() {
    const res = await fetch('http://localhost:8000/tasks', {
        next: {
        revalidate: 0 // use 0 to opt out of using cache
        }
    })

    return res.json()
}

export default async function ToDoList(){
    const tasks = await GetTasks()
    // console.log(tasks)
    return (
        <div className="overflow-x-auto">
            <table className="table">
            {/* head */}
            <thead>
                <tr>
                <th>Tasks</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(todotask => (
                    <tr key={todotask.id}>
                    <td>{todotask.text}</td>
                    <td>Pending</td>
                    </tr>
                ))}
                
            </tbody>
            </table>
            </div>
    );
}