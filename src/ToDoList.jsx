import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]); // Encara la tarea como una nueva, siempre y caso que no sea vacía.
      setNewTask(''); // Limpia el input después de agregar la tarea
    }
  };

  // Función para eliminar una tarea por su índice
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Uso el _ porque es el elemento actual del array. En otras palabras,
    // voy a agarrar todas las tareas menos la que tiene el índice "index".
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input type="text"
        placeholder="Escribí una tarea..." // acá el placeHolder
        value={newTask} // El valor está asignado a la nueva tarea, digamos.
        onChange={(e) => setNewTask(e.target.value)} // Actualiza el estado
      />
      <button onClick={addTask}>Agregar Tarea</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button id="deleteButton" onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
