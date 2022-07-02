import React from 'react';

const TaskInput = ({reload,setReload}) => {

    const handleForm = event => {
        event.preventDefault();
        const task = event.target.text.value;
       

        fetch('https://boxing-inukshuk-00792.herokuapp.com/note', {
            method: 'POST',
            body: JSON.stringify({task}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => console.log(data));

            event.target.reset();
            setReload(!reload);
                
    }
    return (
        <div className=''>
            <form action="" onSubmit={handleForm} className='lg:w-2/4 mx-auto'>
                <input type="text" name='text' className="input input-bordered input-info w-full" />
                <br />
                <br />
                <input type="submit" value="Add" className="input input-bordered input-info w-full" />
            </form>
        </div>
    );
};

export default TaskInput;