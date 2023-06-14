import React from "react";

function DoneImg(props){
    if(props.done){
        return(<img style={{width: '20px', height: '20px' }} alt="done" src="./assets/on.png"></img>)
    }else{
        return(<img style={{width: '25px', height: '20px' }} alt="undone" src="./assets/off.png"></img>)
    }
    
}

function List(props){

    return(
    <ul>
        {props.items.map(item=><li className={item.done?"done":""}key={item.id}>
            {item.text}
            <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
            <button  onClick={()=>{props.onItemDeleted(item)}}>
                <img style={{width: '20px', height: '20px' }} alt="delete" src= "./assets/bin.png"></img>
            </button>
        </li>)}
    </ul>)
}

export default List;