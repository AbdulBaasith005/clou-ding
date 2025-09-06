import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages-ui/Login";
import Register from "./pages-ui/Register";
import Home from "./pages-ui/Home";
import Update from "./pages-ui/Update";
import "./App.css"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/update" element={<Update/>} />
      </Routes>
    </Router>
  );
}
