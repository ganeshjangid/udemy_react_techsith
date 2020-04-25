import React, {useState} from 'react';
import './App.css';
import ItemList from './components/item';
import useList from './hooks/useList';

const initList = [
    {
        name: "carrot",
        calaries: 20
    }, {
        name: "nimboo",
        calaries: 40
    }, {
        name: "apple",
        calaries: 60
    }, {
        name: "banana",
        calaries: 80
    }
]

function App() {

    //const [list, setList] = useState(initList);
    const items=useList(initList);

    const [isEditable, setEditable] = useState(false);


    const deleteItem = (e) => {
        const copyList = [...list];
        const lists = copyList.filter(val => val.calaries > 40);
        return setList(lists);
    }

    const deleteEach = (event) => { // console.dir(event.target);
        // const id = event.target.id;
        // // console.log(id);
        // const copyList = [...list];
        // const lists = copyList.filter((val, i) => {
        //     return i != id;
        // });
        // // console.log(lists);
        // return setList(lists);

        items.removeItem(event.target.id);
    }

    function makeEditableHandle(){
        setEditable(true);
    }

    function saveEditData(e,id){
        //console.dir(e.key);
        if(e.key === "Enter"){
            //console.log("Enter");
            setEditable(false);
            //console.log(id);
            //const copyInitList=[...initList];
            //copyInitList[id].name=e.target.value;
            items.saveItem(id,e.target.value);
        }
        
        
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Grocery List</h1>
                {
                item.list.map((val, i) => {

                    return <ItemList key={i}
                        id={i}
                        name={
                            val.name
                        }
                        calaries={
                            val.calaries
                        }
                        onClick={deleteEach}
                        editable={isEditable} 
                        onDoubleClick={makeEditableHandle}
                        onKeyPress={saveEditData}   
                        />
                })
            }
                <button onClick={deleteItem}
                    className="remove-button">Delete</button>

            </header>
        </div>
    );
}

export default App;
