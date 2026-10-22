import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
