import React, { useState } from "react";
import "./App.css";
import ItemLists from "./components/item";
import useList from "./hooks/useLists";

const initLists = [
  { name: "potato", calories: 20 },
  { name: "tomato", calories: 30 },
  { name: "rice", calories: 50 },
];

function App() {
  //const [lists, setLists] = useState(initLists);
  const items = useList(initLists);
  const [editable, setEditable] = useState(false);

  const handleUnheathly = (e: any) => {
    // const newfilterList = lists.filter((v: any) => v.calories <= 30);
    // setLists(newfilterList);
    //console.dir(e.target.name);
    // const newfilterList = lists.filter((v: any) => v.name !== e.target.name);
    // setLists(newfilterList);
    items.remove(e.target.name);
  };

  const handleDoubleClick = () => {
    setEditable(true);
  };

  const handleEnterEvent = (e: any, i: number) => {
    //console.log(i);
    if (e.key === "Enter") {
      setEditable(!editable);
      items.save(i, e.target.value);
      // const copyList = [...lists];
      // copyList[i].name = e.target.value;
      // setLists(copyList);
    }
  };

  return (
    <>
      <h1>Event Base</h1>
      <h3>Grossary List</h3>
      <ItemLists
        lists={items.lists}
        onClick={handleUnheathly}
        editable={editable}
        doubleClick={handleDoubleClick}
        onKeyPress={handleEnterEvent}
      />
      <br></br>
      {/* <button className="remove-button" onClick={handleUnheathly}>
        Remove Unheathly
      </button> */}
    </>
  );
}

export default App;
