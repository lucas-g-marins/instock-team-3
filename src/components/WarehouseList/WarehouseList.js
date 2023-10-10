import React from "react";
import "./WarehouseList.scss";

function WarehouseList({}) {
  return (
    <div>
      <h1>Warehouses</h1>
      <form>
        <input type="text" name="search" placeholder="Search..."></input>
      </form>
    </div>
  );
}

export default WarehouseList;
