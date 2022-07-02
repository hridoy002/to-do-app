import React, { useEffect, useState } from 'react';
import List from './List';
import TaskInput from './TaskInput';

const ToDo = () => {
    const [tasks, setTasks] = useState([]);
    const [reload,setReload] = useState(true);

    useEffect(() =>{
        fetch(`https://boxing-inukshuk-00792.herokuapp.com/notes`)
        .then(res => res.json())
        .then(data => setTasks(data))
    },[tasks])


    

    
    return (
        <div className='min-h-screen'>
            <h3 className='text-3xl font-bold text-center my-16'>To Do</h3>
            <TaskInput reload={reload} setReload={setReload}/>
            <div className='my-32 grid lg:grid-cols-3 gap-4 w-[90%] mx-auto'>
                {tasks.map(task => <List key={task._id} task={task} reload={reload} setReload={setReload}/>)}
            </div>
        </div>
    );
};

export default ToDo;