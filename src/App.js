import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import Shipping from "./pages/Shipping";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Booking/" element={<Booking />}/>
        <Route path="Shipping" element={<Shipping/>}/>
      </Routes>
    </>
  );
}

export default App;
