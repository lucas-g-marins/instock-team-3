import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./WarehouseDetails.scss";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
import ArrowBack from "../../assets/images/arrow_back-24px.svg";
import axios from "axios";

export function WarehouseDetails({}) {
  const { id } = useParams();
  const [warehouseData, setWarehouseData] = useState([]);

  const apiURL = process.env.REACT_APP_DATA;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiURL}/warehouses/${id}`);
        console.log(data);
        setWarehouseData(...data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="warehouses">
      <div className="warehouses__header">
        <div className="warehouses__nav">
          <Link to="/WarehouseList">
            <img
              className="warehouses__img"
              src={ArrowBack}
              alt="back button"
            />
          </Link>
          <h1 className="warehouses__nav--title">{warehouseData.city}</h1>
        </div>

        {/* Edit Button Section  */}

        <form className="warehouses__forms">
          <Link to={`/EditWarehouse/${id}`}>
            <button className="warehouses__button">
              <h3>Edit</h3>
            </button>
          </Link>
        </form>
      </div>

      {/* Warehouse Details Section */}
      <div className="warehouse">
        <div className="warehouseInformation warehouseSection">
          <div className="warehouseBlock">
            <h4 className="">WAREHOUSE ADDRESS:</h4>
            {warehouseData.address}
            <br />
            {warehouseData.city}, {warehouseData.country}
          </div>
          <div className="warehouseInformation warehouseBorder">
            <div className="warehouseBlock">
              <h4 className="">CONTACT NAME:</h4>
              {warehouseData.contact_name} <br />
              {warehouseData.contact_position}
            </div>
            <div className="warehouseBlock">
              <h4 className="">CONTACT INFORMATION:</h4>
              {warehouseData.contact_phone} <br /> {warehouseData.contact_email}
            </div>
          </div>
        </div>
      </div>

      <div className="warehouses__sections">
        <h4>Inventory Item</h4>
        <h4>Category</h4>
        <h4>Status</h4>
        <h4>Qauntity</h4>
        <h4>ACTIONS</h4>
      </div>
      {/* Inventory List to be displayed: */}
    </div>
  );
}
