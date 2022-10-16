import "./App.css";
import Footer from "./Components/footer/Footer.js";
import Header from "./Components/header/Header";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./Components/router/RootRouter";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <RootRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
