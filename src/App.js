import React from "react";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
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

export default App;
