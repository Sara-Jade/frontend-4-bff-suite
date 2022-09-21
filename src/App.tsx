import { useEffect, useState } from 'react';
import './App.css';
import Loader from './Components/Loader';
import Todo from './Todo';
import { TodoType } from './Types/Todo.type';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(res => setTodos(res.slice(0, 10)))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {todos.length > 0 ?
        todos.map((todo: TodoType) => <Todo todo={todo} />) :
        <Loader/>}
    </div>
  );
}

export default App;
