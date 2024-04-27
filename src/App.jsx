import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Days from "./components/Days";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/day" element={<Days />} />
      </Routes>
    </Router>
  );
}

export default App;
