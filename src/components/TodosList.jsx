import React from 'react'
import Todo from './Todo';
function TodosList({todos, onDelete,setReminder}) {
    
    return (
        <>
            {todos.map(todo => (
                <div key={todo.id}>
                    <Todo
                        title={todo.title}
                        id={todo.id}
                        date={todo.date}
                        reminder={todo.isReminder}
                        onDelete={onDelete}
                        setReminder={setReminder}
                        
                    />
                </div>
            ))
            }
        </>
    )
}

export default TodosList
