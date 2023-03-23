import { useState } from 'react';
import AddTodos from './components/AddTodos';

import TodosList from './components/TodosList';
function App() {
  const [added, isAdded] = useState(false);
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    isAdded(()=> !added)
  }
  const deleteTodo = (id) => {
    setTodos(() => todos.filter((todo) => todo.id !== id))
  };
  const setReminder = (id,reminder) => {
    {reminder ? setTimeout(() => {
      alert('Reminder turned off')
    }, 500):setTimeout(() => {
      alert('Reminder turned on')
    }, 500);}
    setTodos(() => todos.map((todo) => (
      todo.id === id ? { ...todo, isReminder: !todo.isReminder }   : todo
    )))
  }
  return (
    <div className="border-2 border-solid w-[50%] mx-[auto] p-[25px] rounded my-[2%]">
      <header className="flex justify-between items-center px-[12px] pb-[7px]">
        <h1 className=" font-bold text-[25px]">Task Tracker</h1>
        <button onClick={addTodo} className={added === true ? 'bg-red-600 border-none text-white px-[14px] py-[2px] rounded' : 'bg-green-600 border-none text-white px-[14px] py-[2px] rounded'} >{added === true ? 'Close' : 'Add'}</button>
      </header>
      <div>
        {added ? <AddTodos setTodos={setTodos } todos={todos} />:'Add New Task'}
      </div>
      <div>
        {<TodosList todos={todos} onDelete={deleteTodo} setReminder={ setReminder} />}
      </div>
    </div>
  );
}

export default App;
