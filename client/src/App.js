import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Certificate from "./components/partials/Certificates/Certificate";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Cerificate" element={<Certificate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
