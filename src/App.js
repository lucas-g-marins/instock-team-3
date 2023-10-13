import React from "react";

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
import { WarehouseDetails } from "./components/WarehouseDetails/WarehouseDetails";
import InventoryList from "./components/InventoryList/InventoryList";
import WarehouseCard from "./components/WarehouseCard/WarehouseCard";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse"; // Import the EditWarehouse component
import Footer from "./components/Footer/Footer"; // Import the footer component

function App() {
  return (
    <section className="application">
      <Header />

      <Routes>
        <Route path={"/WarehouseList"} element={<WarehouseList />} />
        <Route path={"/WarehouseDetails/:id"} element={<WarehouseDetails />} />
        <Route path={"/WarehouseCard"} element={<WarehouseCard />} />
        <Route path={"/EditWarehouse"} element={<EditWarehouse />} />
        <Route path={"/InventoryList"} element={<InventoryList />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
