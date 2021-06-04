import React, { useState } from "react";
import Todolist from "./Todolist.js";
import "./App.css";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import AnimatedCursor from "react-animated-cursor"
// import UseAnimations from 'react-useanimations';

const App = () => {
  const [inputList, setinputList] = useState("");
  const [Items, setItems] = useState([]);

  // ----Items written in Input to target and show in the div--------
  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const showItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color='193, 11, 111'
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          
        />
        <div className="center-div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          
          <input
            className="input"
            type="text"
            placeholder="Add Items"
            value={inputList}
            onChange={itemEvent}
          ></input>
          <button className="add" onClick={showItem}>
            <AddCircleRoundedIcon />
          </button>

          <ol>
            {Items.map((itemVal, index) => {
              return (
                <Todolist
                  text={itemVal}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        
        </div>
      </div>
    </>
  );
};

export default App;
