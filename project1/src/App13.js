import React,{useState} from 'react';
import './App.css';
import useCustomFetch from "./hooks/useCustomFetch";

function App() {

    const [url,setUrl]=useState(null);
    const [data,error,loading]=useCustomFetch(url);

    function getFollower(e){
        if(e.key === "Enter"){
            setUrl(`https://api.github.com/users/${e.target.value}`);
        }
    }

return (
    <div className="App">
      <header className="App-header">
         <h2>GitID:
            <input onKeyPress={getFollower}></input>

            {loading && url && <div>Loading....</div>}
            {!loading && data && data.rData && data.rData.public_repos && (
                <p>public_repos : {data.rData.public_repos}</p>
            )}
            {error && <div>Error: {error}</div>}
         </h2>   
      </header>
    </div>      
    );

}

export default App;