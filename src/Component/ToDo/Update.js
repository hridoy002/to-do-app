import React from 'react';
import edit from '../../img/edit.png'


const Update = ({id,reload,setReload}) => {
    const handleForm = (event) => {
        event.preventDefault();
        const task = event.target.text.value;

        fetch(`https://boxing-inukshuk-00792.herokuapp.com/note/${id}`, {
            method: 'PUT',
            body: JSON.stringify({task
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setReload(!reload));

            event.target.reset();
            
    }
    return (
        <div>
            <label  for="my-modal-3" class="modal-button"><img src={edit} className="w-8" alt="" /></label>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* form start  */}
                    <form action="" onSubmit={handleForm} className='lg:w-2/4 mx-auto'>
                        <input type="text" name='text' placeholder='Edit Task' className="input input-bordered input-info w-full text-center" />
                        <br />
                        <br />

                        <input type="submit" value="Save" className="input input-bordered input-info w-full" />


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;