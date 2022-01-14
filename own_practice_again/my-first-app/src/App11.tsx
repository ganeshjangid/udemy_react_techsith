import React, { useState } from "react";
import "./App.css";
import useCustomFetch from "./hooks/useCustom";
function App() {
  const [url, seturl] = useState("");
  const [data, error, loading] = useCustomFetch(url);
  //console.log(data.public_repos);

  function HandleGitID(e: any) {
    if (e.key === "Enter") {
      //console.log(e.target.value);
      seturl(`https://api.github.com/users/${e.target.value}`);
    }
  }

  return (
    <>
      <h1>Use Custom Hook:</h1>
      <h2>
        GIT ID :
        <input type="text" onKeyPress={HandleGitID} />
        {loading && url && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </h2>
    </>
  );
}

export default App;
