import React from 'react';
import './App.css';
import Header from "./components/Header";
import SearchPage from "./components/Pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPage/>
    </div>
  );
}

export default App;
