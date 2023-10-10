import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Inventory from "./pages/Inventory";
import Warehouses from "./pages/Warehouses";

function App() {
  return (
    <section className="application">
      <Header />

      <Routes>
        <Route path={"/Warehouses"} element={<Warehouses />} />
        <Route path={"/Inventory"} element={<Inventory />} />
      </Routes>
    </section>
  );
}

export default App;
