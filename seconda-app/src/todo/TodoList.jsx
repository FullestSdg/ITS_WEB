import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {

  return (
    <u1 className="list-group">
        {
            props.tasks.map((task)=>{
                return ( <TodoItem 
                    key={task.id} 
                    task={task}
                    onDeleteTask={props.onDeleteTask}
                    onToggleTask={props.onToggleTask}>

                    </TodoItem>)
            })

        }
        
    </u1>
  )
}

export default TodoList