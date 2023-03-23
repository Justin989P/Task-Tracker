import React,{useRef} from 'react'

const AddTodos = ({setTodos,todos}) => {
  const newTask = useRef("");
  const newDate = useRef("");
  const newReminder = useRef(false);

  const handleSubmitTask = e => {
    e.preventDefault();
    const title = newTask.current.value
    const date = newDate.current.value
    const isReminder = newReminder.current.checked;
    
    const id = Math.floor(Math.random() * 10000) + 1;
    const addedTask = { title, date, isReminder };
    const newTodo = { id, ...addedTask }
    
    setTodos([...todos, newTodo]);


  }
  return (
    <div>
      <form className='py-[12px]' onSubmit={handleSubmitTask}>
        <section className='mb-[25px] ml-[4px]'>
          <h3 className='font-semibold'>Add Task</h3>
          <input type="text" required className='w-[95%] indent-1 ml-[9px] font-medium border-black rounded outline-none p-[4px] border 2' ref={newTask} name="" id="" />
        </section>

        <section className='mb-[25px] ml-[4px]'>
          <h3 className='font-semibold'>Add Date</h3>
          <input type="text" required ref={newDate} className='w-[95%] ml-[9px] indent-1 font-medium border-black rounded outline-none p-[4px] border 2' name="" id="" />
        </section>

        <section className='mb-[25px] ml-[4px] flex justify-between items-center '>
          <h3 className='font-semibold'>Reminder</h3>
          <input type="checkbox" ref={newReminder} className='w-[95%] ml-[9px] font-medium border-black rounded outline-none p-[4px] border 2' name="" id="" />
        </section>
        <button className='w-[100%] bg-black text-white font-semibold py-[11px] rounded'>Add Task</button>
              
      </form>
    </div>
  )
};

export default AddTodos