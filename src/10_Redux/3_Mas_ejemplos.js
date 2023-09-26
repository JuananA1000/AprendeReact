import { increment, decrement } from './store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTask, removeTask } from './store/tasksSlice';

export default function MasEjemplos() {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state.counter.count);
  // const tasks = useSelector((state) => state);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    dispatch(addTask(newTask));
    setNewTask('');
  };
  return (
    <div>
      <h2>10.3. Más Ejemplos</h2>

      <div style={{ backgroundColor: 'aquamarine' }}>
        <h3>Contador </h3>
        <h3>{contador} </h3>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
      </div>

      <div style={{ backgroundColor: 'aquamarine' }}>
        <h3>Lista de Tareas</h3>
      </div>

      <div style={{ backgroundColor: 'aquamarine' }}>
        <h3>Cambiar Tema</h3>
      </div>
    </div>
  );
}
