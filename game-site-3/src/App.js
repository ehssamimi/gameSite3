import React from 'react';
// import logo from './logo.svg';
import './App.css';
import First from "./Component/First/First";
import 'bootstrap/dist/css/bootstrap.min.css';
import Second from "./Component/Second/Second";
import Three from "./Component/Three/Three";

function App() {
  return (
      <div className="">
          <First/>
          <Second/>
          <Three/>
      </div>
  );
}

export default App;
