import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { increment, decrement } from './store/counterSlice';
import { addTask, removeTask } from './store/tasksSlice';
import { toggleDarkTheme, toggleLightTheme } from './store/themeSlice';

export default function MasEjemplos() {
  const [newTask, setNewTask] = useState('');

  const dispatch = useDispatch();

  const contador = useSelector((state) => state.counter.count);
  const tareas = useSelector((state) => state.tasks);
  const temaActual = useSelector((state) => state.theme.currentTheme);

  const handleAddTask = () => {
    dispatch(addTask(newTask));
    setNewTask('');
  };

  const handleToggleTheme = () => {
    if (temaActual === 'light') {
      dispatch(toggleDarkTheme());
    } else {
      dispatch(toggleLightTheme());
    }
  };

  return (
    <div>
      <h2>10.3. Más Ejemplos</h2>

      <div style={{ backgroundColor: 'aquamarine' }}>
        <h3>Contador </h3>
        <h3>{contador}</h3>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
      </div>

      <div style={{ backgroundColor: 'aquamarine' }}>
        <h3>Lista de Tareas</h3>
        <ul>
          {tareas.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => dispatch(removeTask(task))}>Eliminar</button>
            </li>
          ))}
        </ul>
        <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={handleAddTask}>Agregar Tarea</button>
      </div>

      <div style={{ backgroundColor: 'aquamarine' }}>
        <h3>Cambiar Tema</h3>
        <p>Tema actual: {temaActual}</p>
        <button onClick={handleToggleTheme}>Cambiar Tema</button>
      </div>
    </div>
  );
}
