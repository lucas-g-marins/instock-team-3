import React from "react";

import "./App.scss";
import Header from "./components/Header";
import Inventory from "./pages/Inventory";
import Warehouses from "./pages/Warehouses";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Routes
} from "react-router-dom";
// pages component(s) import
import Warehouse from "./components /Warehouses/Warehouses";
import WarehouseDetails from "./components /WarehouseDetails/WarehouseDetails";
import Inventory from "./components /Inventory/Inventory";
// root layout import
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Warehouse />} />
      <Route path="Inventory" element={<Inventory />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};


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
