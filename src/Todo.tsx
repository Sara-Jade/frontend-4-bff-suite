import React from 'react';
import { TodoType } from './Types/Todo.type';

interface Props {
    todo: TodoType;
    index: number;
    toggleDone: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const Todo: React.FC<Props> = ({todo, index, toggleDone, deleteTodo}) => {
    return (<div className='todo' style={{textDecoration: todo.completed ? 'line-through' : ''}}>
        {todo.title}
        <div>
            <button onClick={() => toggleDone(index)}>{todo.completed ? 'Done' : 'Todo'}</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
    </div>)
}

export default Todo;