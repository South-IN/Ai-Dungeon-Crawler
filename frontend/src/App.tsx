import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartGame from "./pages/StartGame";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start-game" element={<StartGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
