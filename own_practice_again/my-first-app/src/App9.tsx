import React, { useEffect, useState } from "react";
import "./App.css";

const initProfile = {
  followers: 0,
  public_repos: 0,
};
function App() {
  const [data, setData] = useState(initProfile);

  async function getProfile() {
    const response = await fetch("https://api.github.com/users/ganeshjangid");
    const json = await response.json();
    //console.log(json);
    setData({
      followers: json.followers,
      public_repos: json.public_repos,
    });
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <h1>Use Effect Example:</h1>
      <h3>Fetch Data</h3>
      <h4>Followers : {data.followers}</h4>
      <h4>Public Repository : {data.public_repos}</h4>
    </>
  );
}

export default App;
