import React,{useState,useEffect} from 'react';
import './App.css';

const initProfile={
    following:null,
    publicRep:null,
    name:null
};


function App(){

    const [profile,setProfile] =useState(initProfile);

    async function getProfile(){
        
        try {
            const response=await fetch('https://api.github.com/users/ganeshjangid');
            const JSON=await response.json();
            
            setProfile({
                following:JSON.following,
                publicRep:JSON.public_repos,
                name:JSON.name
            });

        } catch (error) {
            console.log(error);
            
        }
        

    }

    useEffect(()=>{
        getProfile();
        console.log("Hello");
        
    },[]);
    return (
        <div className="App">
          <header className="App-header">
            <h1>Fetch Data Use Effect </h1>
            <h1>Name : {profile.name}</h1>
            <h1>Following : {profile.following}</h1>
            <h1>public_repos : {profile.publicRep}</h1>
          </header>
        </div> 
    )
}

export default App;