import React, { useEffect, useState } from "react";
import "./InventoryList.scss";
import axios from "axios";
import SearchIcon from "../../assets/icons/search-24px.svg";
import InventoryCard from "../InventoryCard/InventoryCard";

function InventoryList({}) {
  const [inventoryData, setInventoryData] = useState([]);

  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiURL}/inventories`);
        setInventoryData(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="inventory">
      <div className="inventory__header">
        <h1 className="inventory__title">Inventories</h1>
        <form className="inventory__form">
          <div className="inventory__input-container">
            <input type="text" name="search" placeholder="Search..."></input>
            <img className="inventories__search-icon" src={SearchIcon}></img>
          </div>
          <button className="inventories__button">
            <h3>+ Add New Item</h3>
          </button>
        </form>
      </div>
      <div className="inventory__sections">
        <h4>INVENTORY ITEM</h4>
        <h4>CATEGORY</h4>
        <h4>STATUS</h4>
        <h4>QTY</h4>
        <h4>WAREHOUSE</h4>
        <h4>ACTIONS</h4>
      </div>
      {inventoryData.map((inventory) => (
        <InventoryCard
          key={inventory.id}
          item={inventory.item_name}
          category={inventory.category}
          status={inventory.status}
          quantity={inventory.quantity}
          warehouse={inventory.warehouse_id}
          id={inventory.id}
        />
      ))}
    </div>
  );
}

export default InventoryList;
