import "./App.css";
import Footer from "./Components/footer/Footer.js";
import Header from "./Components/header/Header";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./Components/router/RootRouter";
import {setAuthHeader} from "./utils/setAuthHeader";
function App() {
  if (localStorage.tokenDetail) {
    setAuthHeader(localStorage.tokenDetail);
  } else {
    setAuthHeader(false);
  }

  return (
    <BrowserRouter>
      <Header />
      <RootRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
