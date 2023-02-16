import { FormEvent, MutableRefObject, useRef } from "react"
import ToDo from "../interfaces/ToDo"

interface Props {
  onAddToDo: (todo: ToDo) => void
}

const ToDoForm = (props: Props) => {


const titleRef = useRef() as MutableRefObject<HTMLInputElement>
const textRef = useRef() as MutableRefObject<HTMLTextAreaElement>
const dateRef = useRef() as MutableRefObject<HTMLInputElement>

const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newToDo: ToDo = {
      title: titleRef.current.value,
      text: textRef.current.value,
      date: +dateRef.current.value
    }

    props.onAddToDo(newToDo)
  }

  return (
    <><div className="formcontainer">
      <h1>TodoForm</h1>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div>
          <label htmlFor="title">Title: </label>
          <input type="text" required ref={titleRef} />
        </div>
        <div>
            <label htmlFor="description">Description: </label>
            <textarea ref={textRef}></textarea>
        </div>
        <div>
          <label htmlFor="age">Date: </label>
          <input type="date" required ref={dateRef} />
        </div>
        <button>Submit</button>
      </form>
      </div>
    </>
  )
}

export default ToDoForm