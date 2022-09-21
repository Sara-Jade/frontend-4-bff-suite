import React from 'react';
import { TodoType } from './Types/Todo.type';

interface Props {
    todo: TodoType;
}

const Todo: React.FC<Props> = ({todo}) => {
    return (<>Todo...</>)
}

export default Todo;