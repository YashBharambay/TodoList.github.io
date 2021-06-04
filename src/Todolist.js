import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import UseAnimations from 'react-useanimations';

const Todolist = (props) => {


  return (
    <>
      <div className="todo-style">
        <button onClick={()=>{             /*-----callback function*/       
            props.onSelect(props.id)          
        }} 
        className="delete">
          <HighlightOffIcon/>
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default Todolist;
