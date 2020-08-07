import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";

const App=()=> {
    const [sidebarOpen,setSidebarOpen]=useState(true);
    const openHandler=()=>{
        if(!sidebarOpen){
            setSidebarOpen(true);
        }
        else{
            setSidebarOpen(false);
        }
    }
    const sidebarCloseHandler=()=>{
        setSidebarOpen(false);
    }
    let sidebar
    let page="100%"
    if(sidebarOpen)
    {
        sidebar=<Sidebar close={sidebarCloseHandler}  Open={openHandler} sidebar={"sidebar"}/>
        page="85%";
    }
  return (
      <Router>
         {sidebar}
          <header className="main-header">
            <div id="main-header-toogle" onClick={openHandler}>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <div className="main-header-heading">
                <h1>AI DATABASES AI DATABASES AI DATABASES </h1>
            </div>
          </header>
          <Page width={page}/>
      </Router>
  );
}

export default App;

