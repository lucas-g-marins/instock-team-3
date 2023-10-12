import React, { useEffect, useState } from "react";
import "./WarehouseList.scss";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import axios from "axios";
import SearchIcon from "../../assets/icons/search-24px.svg";

function WarehouseList({}) {
  const [warehouseData, setWarehouseData] = useState([]);

  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiURL}/warehouses`);
      setWarehouseData(data);
    } catch (error) {
      console.log("Error:", error)
    }  
    };
    fetchData();
  }, []);

  return (
    <div className="warehouses">
      <div className="warehouses__header">
        <h1 className="warehouses__title">Warehouses</h1>
        <form className="warehouses__form">
          <div className="warehouses__input-container">
            <input type="text" name="search" placeholder="Search..."></input>
            <img className="warehouses__search-icon" src={SearchIcon}></img>
          </div>
          <button className="warehouses__button">
            <h3>+ Add New Warehouse</h3>
          </button>
        </form>
      </div>
      <div className="warehouses__sections">
        <h4>WAREHOUSE</h4>
        <h4>ADDRESS</h4>
        <h4>CONTACT NAME</h4>
        <h4>CONTACT INFORMATION</h4>
        <h4>ACTIONS</h4>
      </div>
      {warehouseData.map((warehouse) => (
        <WarehouseCard
          key={warehouse.id}
          city={warehouse.city}
          address={warehouse.address}
          name={warehouse.contact_name}
          phone={warehouse.contact_phone}
          email={warehouse.contact_email}
          id={warehouse.id}
        />
      ))}
    </div>
  );
}

export default WarehouseList;
