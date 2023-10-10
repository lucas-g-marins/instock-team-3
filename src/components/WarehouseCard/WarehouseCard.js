import React from "react";
import "./WarehouseCard.scss";

function WarehouseCard({ city }) {
  return (
    <div className="warehousecard">
      <div className="warehousecard__location">
        <h4>WAREHOUSE</h4>
        <h4 className="warehousecard__city">{city}</h4>
        <h4>ADDRESS</h4>
        <h4></h4>
      </div>
      <div className="warehousecard__contact"></div>
    </div>
  );
}

export default WarehouseCard;
