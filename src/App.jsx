import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesDos from "../src/routes/RoutesDos";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesDos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
