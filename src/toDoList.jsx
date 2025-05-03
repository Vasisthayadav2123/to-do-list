import React,{useState} from "react";

function todolist() {

    const [tasks, setTasks] = useState(["eat", "sleep", "code"]);
    const [task, setTask] = useState("");

    function handleInputChange(event) {
        setTask(event.target.value);

    }

    function addTask(){

    }

    function removeTask(index){

    }
    
    function moveTaskUp(index){

        }

    function moveTaskDown(index){

        }

  return (
    <div className="todolist">
        <h1>TO DO LIST</h1>
            <div>
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
                        {task}
                        <button>move up</button>
                        <button>move down</button>
                        <button>remove</button>
                    </li>)
                }

            </ol>
    </div>
  );
    
}
export default todolist;