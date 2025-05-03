import React,{useState} from "react";

function todolist() {

    const [tasks, setTasks] = useState(["eat", "sleep", "code"]);
    const [task, setTask] = useState("");

    function handleInputChange(event) {
        setTask(event.target.value);

    }

    function addTask(){
        if(task.trim() !== ""){
            setTasks( t => [...t,task]);
        setTask("");
        }
    }

    function removeTask(index){
        const newTasks = tasks.filter((elements, ind) => ind !==index);
        setTasks(newTasks); 

    }
    
    function moveTaskUp(index){
        if(index > 0){
            const newTasks = [...tasks];
            const temp = newTasks[index - 1];
            newTasks[index - 1] = newTasks[index];
            newTasks[index] = temp;
            setTasks(newTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const newTasks = [...tasks];
            const temp = newTasks[index + 1];
            newTasks[index + 1] = newTasks[index];
            newTasks[index] = temp;
            setTasks(newTasks);
        }

        }

  return (
    <div className="todolist">
        <h1>TO DO LIST</h1>
            <div className="input-container">
            <input type="text"
                placeholder="Add a new task"
                value ={task}
                onChange={handleInputChange}
            />
            <button onClick={addTask} className="add-button">add</button>
            </div>
            <ol>
                {
                    tasks.map((task,index)=>
                    <li key = {index}>
                        <span className="text">{task}</span>
                        <button className="up-button" onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className="downbutton" onClick={() => moveTaskDown(index)}>⬇️</button>
                        <button className="remove-but" onClick={() => removeTask(index)}>delete</button>
                    </li>)
                }

            </ol>
    </div>
  );
    
}
export default todolist;