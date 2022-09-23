import { useEffect, useState } from 'react';
import './App.css';
import Loader from './Components/Loader';
import TodoForm from './Components/TodoForm';
import Todo from './Todo';
import { TodoType } from './Types/Todo.type';

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [error, setError] = useState({});

  const toggleDone = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleOnSubmit = (inputValue: string) => {
    setTodos(
      [...todos, {
        title: inputValue,
        id: todos.length + 1,
        completed: false
      }]
    )
  };

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(res => setTodos(res.slice(0, 10)))
    .catch(err => setError(err));
  }, []);

  return (
    <div className="App">
      {todos.length > 0 ?
        todos.map((todo: TodoType, index) => <Todo todo={todo} index={index} toggleDone={toggleDone} deleteTodo={deleteTodo}/>) :
        <Loader/>}
      <TodoForm handleOnSubmit={handleOnSubmit}/>
    </div>
  );
}

export default App;
