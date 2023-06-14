import React, { useState } from "react";

function TodoForm(props){

    const [text, setText] = useState("");

    function handleChange(event){
        setText(event.target.value);
    }

    function addItem(event){
        event.preventDefault();
        if(text){
            props.onAddItem(text);
            setText("");
        }
    }

    return(
    <form>
        <input type="text" onChange={handleChange} value={text}></input> 
        <button onClick={addItem}>Add</button>
    </form>
    )
}

export default TodoForm;