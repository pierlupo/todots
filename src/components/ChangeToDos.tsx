import { useEffect, useState } from "react"
import ToDo from "../interfaces/ToDo"

interface Props {

} 

const NewTodosComponent = (props: Props) => {

  const [ToDo, setNewTodos] = useState<ToDo>({title: "", text: "", date:0})

  
  const changeToDoValues = () => {
    setNewTodos({
      title: "dfgsgss",
      text: "bdbfdbffdb",
      date:0
    })
  }
  
  useEffect(() => {

    console.log("useEffect:", ToDo)
    
    return () => {

      console.log("return de useEffect:", ToDo)
    }
  }, [ToDo])

  return (
    <>

      <div>
        <p> ma nouvelle toDo : <b>{JSON.stringify(ToDo)}</b></p>
      </div>
      <button onClick={changeToDoValues}>Change ToDo</button>
    </>
  )
}

export default NewTodosComponent