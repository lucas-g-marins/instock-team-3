import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import axios from "axios";

function WarehouseList({}) {
  const [warehouseData, setWarehouseData] = useState([]);

  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${apiURL}/warehouses`);
      setWarehouseData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="warehouses">
      <h1 className="warehouses__title">Warehouses</h1>
      <form className="warehouses__form">
        <input type="text" name="search" placeholder="Search..."></input>
        <button className="warehouses__button">
          <h3>+ Add New Warehouse</h3>
        </button>
      </form>
      {warehouseData.map((warehouse) => (
        <WarehouseCard key={warehouse.id} city={warehouse.city} />
      ))}
    </div>
  );
}

export default WarehouseList;
