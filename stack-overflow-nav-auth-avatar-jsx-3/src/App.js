import React from "react";
import ReactDOM from "react-dom";
import Header1 from "./header";
import { BrowserRouter as Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Route1 from "../../Route";
import allroutes from './allroutes';
function App() {
  return (
    <div className="App">
      <Route>
      <Navbar />

      <Header1 />
      <Route/>
    </div>
  );
}
ReactDOM.render(<div>{App()}</div>, document.getElementById("root"));

export default App;
