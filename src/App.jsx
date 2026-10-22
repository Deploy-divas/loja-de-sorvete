import { BrowserRouter, Route, Routes } from "react-router-dom";
import Erro from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
