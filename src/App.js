import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
