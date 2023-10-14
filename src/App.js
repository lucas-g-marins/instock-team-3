
import React from 'react';
import EditWarehouse from './components/EditWarehouse/EditWarehouse'; // Import the EditWarehouse component


import "./App.scss";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
// pages component(s) import
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import InventoryList from "./components/InventoryList/InventoryList";
// import WarehouseCard from "./components/WarehouseCard/WarehouseCard";
// import InventoryCard from "./components/InventoryCard/InventoryCard";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse"; // Import the EditWarehouse component
import Footer from "./components/Footer/Footer"; // Import the footer component
import InventoryCard from "./components/InventoryCard/InventoryCard";

function App() {
  return (
    <section className="application">
      <Header />
      {/* <WarehouseList /> */}
      <Routes>
        <Route path={"/WarehouseList"} element={<WarehouseList />} />
        {/* <Route path={"/WarehouseCard"} element={<WarehouseCard />} /> */}
        <Route path={"/EditWarehouse"} element={<EditWarehouse />} />
        <Route path={"/InventoryList"} element={<InventoryList />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
