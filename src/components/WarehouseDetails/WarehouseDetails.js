import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./WarehouseList.scss";
import WarehouseCard from "../WarehouseCard/WarehouseCard";
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
        <h1 className="warehouses__title">{warehouseData.city}</h1>
        <form className="warehouses__form">
          <button className="warehouses__button">
            <h3>Edit</h3>
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
      {/* {warehouseData.map((warehouse) => ( */}
      <WarehouseCard
        key={warehouseData.id}
        city={warehouseData.city}
        address={warehouseData.address}
        name={warehouseData.contact_name}
        phone={warehouseData.contact_phone}
        email={warehouseData.contact_email}
        id={warehouseData.id}
      />
      {/* ))} */}
    </div>
  );
}
