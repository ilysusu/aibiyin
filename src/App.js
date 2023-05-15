import HelloWorld from "@components/HelloWorld";
import { Route, Routes, useRoutes } from "react-router-dom";
import routes from "./router";

function App() {
  return (
    <div className="App">
      <div className="header">header</div>

      <div className="container">
        {useRoutes(routes)}
      </div>
      
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
