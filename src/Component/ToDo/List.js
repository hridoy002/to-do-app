import React from 'react';
import Update from './Update';

const List = (  {task,reload, setReload} ) => {
    
    // const {task, _id} = task ;

    // handle delete 
    const handleDelete = id => {
        console.log(id)
        fetch(`https://boxing-inukshuk-00792.herokuapp.com/note/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReload(!reload);
            });

    }

    return (
        <div >

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <input type="checkbox"  className="" />
                    <h2 className="card-title">{task.task}</h2>

                    <div class="card-actions justify-between">
                        <Update id={task._id} reload={reload} setReload={setReload} />
                        {/* delete  */}
                        <button onClick={() => handleDelete(task._id)} className='btn btn-error'>Delete</button>
                    </div>
                </div>
            </div>











        </div >

    );
};

export default List;

{/*  */ }