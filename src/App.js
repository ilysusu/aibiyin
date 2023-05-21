import { useRoutes } from "react-router-dom";
import routes from "./router";
import Header from "./components/app-header";
import Footer from "./components/app-footer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="container">
        {useRoutes(routes)}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
