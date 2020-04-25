import React,{useEffect,useRef} from 'react';
import './App.css';

function App(){

    const nameRef=useRef();
    const ageRef=useRef();
    const marriedRef=useRef();
    const submitRef=useRef();

    useEffect(()=>{
        nameRef.current.focus();
    },[]);

    function keyPressHandle(e){
            //console.log(e.keyCode);
        if(e.keyCode === 13)    {
            if(e.target.id === "nameInput"){
                ageRef.current.focus();
            }
            if(e.target.id === "ageInput"){
                marriedRef.current.focus();
            }
            if(e.target.id === "marriedInput"){
                submitRef.current.focus();
            }
        }   
    }

    function onClickHandle(){
        alert("submitted");
    }

    return (
        <div className="App">
          <header className="App-header">
            <h3>UseRefs Hook</h3>
            <div className="form-field">
              <span>Name</span>
              <input
                id="nameInput"
                type="text"
                ref={nameRef}
                onKeyDown={keyPressHandle}

              />
            </div>
            <div className="form-field">
              <span>age</span>
              <input
                id="ageInput"
                type="text"
                ref={ageRef}
                onKeyDown={keyPressHandle}
              />
            </div>
            <div className="form-field">
              <span>Married?</span>
              <input
                id="marriedInput"
                type="checkbox"
                ref={marriedRef}
                onKeyDown={keyPressHandle}
              />
            </div>
            <button
              id="submitButton"
              ref={submitRef}
              onKeyDown={keyPressHandle}
              onClick={onClickHandle}
            >
              Submit
            </button>
          </header>
        </div>
      );
}

export default App;
