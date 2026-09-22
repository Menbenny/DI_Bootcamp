import { useState } from 'react'
import TaskList from '.components/TaskList'
import './App.css'
import { v4 as uuid} from 'uuid'
import { createContext } from 'react'

export const TaskContext = createContext()

const initialState = {
  tasks: [],
  active: true,
};

/* action constant types */
const ADD_TASK = "add_task";
const REMOVE_TASK = "remove_task";

const taskReducer = (state, action) => {
  if(action.type === ADD_TASK){
    const newTasks = {...tasks}
  }
  return state;
}

function App() {
  const [count, setCount] = useState(0)

  const taskInputRef = useRef()
  const addTask = () => {
    const value = taskInputRef.current.value;
  }
  return (
    <>

    </>
  )
}

export default App
