import { useState } from 'react';

interface Props {
    handleOnSubmit: (inputValue: string) => void;
}

const TodoForm: React.FC<Props> = ({handleOnSubmit}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit(inputValue);
            setInputValue('')}}>
            <input type="text" className="todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
            </input>
        </form>
    );
};

export default TodoForm;