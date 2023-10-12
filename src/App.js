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

import Header from "./components/Header";
import Warehouses from "./components/Warehouses/Warehouses";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Inventory from "./components/Inventory/Inventory";
// root layout import
import RootLayout from "./layout/RootLayout";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse"; // Import the EditWarehouse component
import Footer from "./components/Footer/Footer"; // Import the footer component

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Warehouse />} />
//       <Route path="Inventory" element={<Inventory />} />
//     </Route>
//   )
// );

// const App = () => {
//   return <RouterProvider router={router} />;
// };

function App() {
  return (
    <section className="application">
      <Header />

      <Routes>
        <Route path={"/Warehouses"} element={<Warehouses />} />
        <Route path={"/Inventory"} element={<Inventory />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
