import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetails.scss";
import InventoryCard from "../InventoryCard/InventoryCard";
import axios from "axios";
import backIcon from "../../assets/images/arrow_back-24px.svg";
import { Link } from "react-router-dom";

export function InventoryDetails() {
  const { id } = useParams();
  const [inventoryData, setInventoryData] = useState([]);

  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiURL}/inventories/${id}`);
        console.log(data);
        setInventoryData(...data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="inventories">
      <div>
        <div className="inventories__header">
          <Link to={`/inventorylist`}>
            <img
              src={backIcon}
              alt="Back Icon"
              className="edit-warehouse__back-icon"
            />
          </Link>
          <h1 className="inventories__title">{inventoryData.item_name}</h1>
          <form className="inventories__form">
            <button className="inventories__button">
              <h3>Edit</h3>
            </button>
          </form>
        </div>
        <div className="inventories__sections">
          <h4>ITEM DESCRIPTION</h4>
          <h4>CATEGORY</h4>
          <h4>STATUS</h4>
          <h4>QUANTITY</h4>
          <h4>WAREHOUSE</h4>
        </div>
        <h4>{inventoryData.description}</h4>
        <h4>{inventoryData.category}</h4>
        <h4>{inventoryData.status}</h4>
        <h4>{inventoryData.quantity}</h4>
        <h4>{inventoryData.warehouse_name}</h4>
      </div>
    </div>
  );
}

export default InventoryDetails;
