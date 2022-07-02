import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Calender = () => {

    const [value, onChange] = useState(new Date());
    return (
        <div className='w-[90%] min-h-screen'>
            <h4 className='text-2xl text-center font-bold mt-10'>Daily Schedule</h4>
            <Calendar className='mx-auto my-16'  onChange={onChange} value={value}/>
            
        </div>
    );
};

export default Calender;