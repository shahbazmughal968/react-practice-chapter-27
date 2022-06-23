import React,{useRef} from "react";

const NewTodo:React.FC<{onAddTodo:(text:string) => void}>=(props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event:React.FormEvent) =>{
        event.preventDefault();
        const enteredText=todoTextInputRef.current!.value;

        if(enteredText.trim.length === 0)
        {
            return;
        }

        props.onAddTodo(enteredText);
    }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <br />
      <input type="text" placeholder="Enter a text" id="text" ref={todoTextInputRef}/>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
