import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stock from "./Pages/Stock";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import Quotes from "./Pages/Quotes";
import Footer from "./Component/Footer";
import Error from "./Component/Error";
import Loading from "./Component/Loading";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/quotes/:symbol" element={<Quotes />} />
          <Route path="/404" element={<Error />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
