import React, { useState } from 'react';
import './App.css';
interface UserData {
  name: string;
  avatar_url: string;
  followers: number
}
function App() {
  const [user, setUser] = useState<UserData | null>(null);;
  const [enterUser, setEnterUser] = useState('');

  const handleGitUser = async () => {
    try {
      const userD = await fetch(`https://api.github.com/users/${enterUser}`);
      const userData = await userD.json();
      console.log("resp==>", userData);
      if (userData.status) {
        setUser(null);
      } else {
        setUser(userData);
      }

    } catch (error) {
      console.log("Show me error==>", error);
      setUser(null);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className='startHeading'>
          Start Revision from 2024 (API Response)
        </p>
        <div>
          <p>Show me Git User Details</p>
          <p>Enter Your Name: <input type="text" placeholder='Enter User Id' value={enterUser} onChange={(e) => setEnterUser(e.target.value)} /></p>
          <p><button onClick={handleGitUser}> Click Me</button></p>
        </div>
        <>
        </>
        {user ? (<><div>Show User Git Data</div><p>Name: {user?.name}</p><p><img src={user?.avatar_url} alt={user?.name} width={100}/></p><p>Followers: {user?.followers}</p></>) : (<><div>No Result</div></>)}


      </header>
    </div>
  );
}

export default App;
