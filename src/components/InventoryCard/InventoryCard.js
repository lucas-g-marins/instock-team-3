import React, { useState, useEffect } from "react";
import "./InventoryCard.scss";
import { Link } from "react-router-dom";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";
import axios from "axios";

function InventoryCard({
  item_name,
  category,
  status,
  quantity,
  warehouse,
  id,
}) {
  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    if (warehouse) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`${apiURL}/warehouses/${warehouse}`);
          console.log(data);
          setWarehouseData(data);
        } catch (error) {
          console.log("Error:", error);
        }
      };
      fetchData();
    }
  }, []);

  const [warehouseData, setWarehouseData] = useState([]);

  return (
    <div className="inventory-card">
      <div className="inventory-card__info">
        <div className="inventory-card__location">
          <h4 className="inventory-card__copy inventory-card__title">
            INVENTORY ITEM
          </h4>
          <div className="inventory-card__name-container">
            <h3 className="inventory-card__item">{item_name}</h3>
            <img src={ChevronIcon}></img>
          </div>
          <h4 className="inventory-card__copy inventory-card__title">
            CATEGORY
          </h4>
          <h4 className="inventory-card__copy">{category}</h4>
        </div>
        <div className="inventory-card__contact">
          <h4 className="inventory-card__copy inventory-card__title">STATUS</h4>
          <h4 className="inventory-card__copy">{status}</h4>
          <h4 className="inventory-card__copy inventory-card__title">QTY</h4>
          <h4 className="inventory-card__copy">{quantity}</h4>
          <h4 className="inventory-card__copy inventory-card__title">
            WAREHOUSE
          </h4>
          <h4 className="inventory-card__copy">
            {warehouseData.warehouse_name}
          </h4>

          {/* <div className="inventory-card__contact-info">
            <h4 className="inventory-card__copy">{phone}</h4>
            <h4 className="inventory-card__copy">{email}</h4>
          </div> */}
        </div>
      </div>
      <div className="inventory-card__icons">
        <img src={DeleteIcon}></img>
        <Link to={`/EditInventory/${id}`}>
          <img src={EditIcon}></img>
        </Link>
      </div>
      {/* tablet and desktop */}
      <div className="inventory-card__info--tablet-desktop">
        <div className="inventory-card__name-container">
          <h3 className="inventory-card__city">{item_name}</h3>
          <img src={ChevronIcon}></img>
        </div>
        <h4 className="inventory-card__copy inventory-card__address">
          {category}
        </h4>
        <h4 className="inventory-card__copy inventory-card__name">{status}</h4>
        <div className="inventory-card__contact-info">
          <h4 className="inventory-card__copy">{quantity}</h4>
          <h4 className="inventory-card__copy">
            {warehouseData.warehouse_name}
          </h4>
        </div>
        <div className="warehousecard__icons--tablet-desktop">
          <img src={DeleteIcon}></img>
          <Link to={`/EditInventory/${id}`}>
            <img src={EditIcon}></img>
          </Link>
        </div>
      </div>
    </div>
    //  </Link>
  );
}

export default InventoryCard;
