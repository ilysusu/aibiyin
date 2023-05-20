import { useRoutes } from "react-router-dom";
import routes from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>

      <div className="container" style={{backgroundColor: 'pink'}}>
        {useRoutes(routes)}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
