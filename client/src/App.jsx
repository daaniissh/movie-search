import React, { Fragment, useState } from "react";
import './App.css'
import SearchLocal from "./SearchLocal";
import SearchAPI from "./SearchAPI";
const App = () => {
  const [tab, setTab] = useState('form')

  return (
    <Fragment>
      {/* <button className="form-btn" onClick={()=>setTab("form")} >Search Local</button> */}
      {/* <button className="use-btn" onClick={()=>setTab("useEFfect")} >Search API</button> */}
      <div className="root">
        <SearchAPI />
      </div>

    </Fragment>
  );
};

export default App;
