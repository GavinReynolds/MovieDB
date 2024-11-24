import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import "./components/MovieCard";
import "./pages/Home";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favorites" element={<Favorite />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
