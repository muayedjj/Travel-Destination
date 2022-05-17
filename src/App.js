import './App.css';
import Home from './Components/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import TourDetails from './Components/TourDetails/TourDetails';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>
    </div>
  );
}

export default App;
