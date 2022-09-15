import "./App.css";
import React from "react";
import Header from "./Header";
// import PersonalDetails from './components/PersonalDetails';
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Resume />
      </div>
    </div>
  );
}

export default App;
