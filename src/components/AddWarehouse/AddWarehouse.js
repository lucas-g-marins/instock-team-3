import React from "react";
import "./AddWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";

function AddWarehouse() {
  return (
    <div className="add-warehouse">
      <div className="add-warehouse__header">
        <img src={BackArrow}></img>
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>
      <div className="add-warehouse__details">
        <h2>Warehouse Details</h2>
        <form>
          <label>Warehouse Name</label>
          <input type="text" placeholder="Warehouse Name"></input>
          <label>Street Address</label>
          <input type="text" placeholder="Street Address"></input>
          <label>City</label>
          <input type="text" placeholder="City"></input>
          <label>Country</label>
          <input type="text" placeholder="Country"></input>
        </form>
      </div>
      <div className="add-warehouse__border"></div>
      <div className="add-warehouse__contact-details">
        <h2>Contact Details</h2>
        <form>
          <label>Contact Name</label>
          <input type="text" placeholder="Contact Name"></input>
          <label>Position</label>
          <input type="text" placeholder="Position"></input>
          <label>Phone Number</label>
          <input type="text" placeholder="Phone number"></input>
          <label>Email</label>
          <input type="text" placeholder="Email"></input>
          <div className="add-warehouse__footer">
            <button className="add-warehouse__cancel-btn">Cancel</button>
            <button className="add-warehouse__add-btn">+ Add Warehouse</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddWarehouse;
