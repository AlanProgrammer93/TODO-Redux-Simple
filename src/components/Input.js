import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';
import "./Input.css";

export const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        if (input.trim() === '') {
            alert('El campo no puede estar vacio.')
        } else {
            dispatch(saveTodo({
                item: input,
                done: false,
                id: Date.now()
            }));
            setInput('');
        }
        
    }

    return (
        <div className="input">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Agregar</button>
        </div>
    )
}
