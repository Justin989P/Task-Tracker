import React from 'react';
import {FaTimes} from 'react-icons/fa'

function Todo({ title, date, id, reminder, onDelete, setReminder }) {
  const borderOn = 'bg-gray-300 flex justify-between items-center border-l-4 py-[3px] my-[1em] rounded-tr-sm rounded-br-sm border-green-500  ';

  const borderOff = 'bg-gray-300 flex justify-between items-center border-l-4 py-[3px] my-[1em] rounded-tr-sm rounded-br-sm';
  return (
    <div className={reminder?borderOn:borderOff} key={id} onDoubleClick={()=>setReminder(id,reminder)}>
      <div className='ml-[9px]'>
        <h2 className='font-semibold capitalize '>{title}</h2>
        <p>{date }</p>
      </div>
      <FaTimes onClick={()=>onDelete(id)} className='mr-[1.5em] text-red-600'/>  
    </div>
  )
}

export default Todo
