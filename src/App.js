import "./App.css";
import Footer from "./Components/footer/Footer.js";
import Header from "./Components/header/Header";
import { BrowserRouter } from "react-router-dom";
import RootRouter from "./Components/router/RootRouter";
import axios from "axios";
function App() {
  if (localStorage.tokenDetail) {
    axios.defaults.headers = {
      secret_this_should_be_longer: localStorage.tokenDetail,
    };
  } else {
    delete axios.defaults.headers.secret_this_should_be_longer;
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
