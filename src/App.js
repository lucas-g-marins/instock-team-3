import React from "react";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// pages component
import Warehouse from "./components /Warehouses/Warehouses";
import Inventory from "./components /Inventory/Inventory";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>INSTOCK</h1>
          <NavLink to="/">Warehouse</NavLink>
          <NavLink to="Inventory">Inventory</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Warehouse />} />
          <Route path="Inventory" element={<Inventory />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
