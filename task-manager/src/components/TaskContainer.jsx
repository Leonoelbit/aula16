import React from 'react';
import Task from './Task';
function TaskContainer() {
 const tasks = [
 { id: 1, title: 'Tarefa 1:', description: 'Lavar os pratos' },
 { id: 2, title: 'Tarefa 2:', description: 'Criar a ficha do Tarasque' },
 ];
 return (
 <div>
 {tasks.map((task) => (
 <Task key={task.id} title={task.title} description={task.description} />
 ))}
 </div>
 );
}
export default TaskContainer;