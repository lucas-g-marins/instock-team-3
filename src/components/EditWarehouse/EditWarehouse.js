/* EditWarehouse.js */

import React, { useState } from "react";
import "./EditWarehouse.scss"; // Import the SASS
import backIcon from "../../assets/images/arrow_back-24px.svg"; // Import the icon

const EditWarehouse = () => {
  // State to store form field values
  const [warehouseData, setWarehouseData] = useState({
    warehouseName: "Chicago",
    address: "3218 Guess Rd",
    city: "Chicago",
    country: "USA",
    contactName: "Jameson Schuppe",
    position: "Warehouse Manager",
    phoneNumber: "+1 (919) 797-2875",
    email: "jschuppe@instock.com",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData({ ...warehouseData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/warehouses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(warehouseData),
      });

      if (response.status === 201) {
        // Successful response, handle it accordingly
        const newWarehouse = await response.json();
        // You can update your UI with the new warehouse data or display a success message
      } else if (response.status === 400) {
        // Handle validation error (e.g., missing or invalid data)
        const errorResponse = await response.json();
        // You can display the error message to the user
      } else {
        // Handle other error cases (e.g., server error)
        // You can display an error message to the user
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error(error);
    }
  };

  return (
    <div className="edit-warehouse-container">
      <div className="edit-warehouse-card">
        <div className="edit-warehouse">
          <div className="edit-warehouse__header">
            <img
              src={backIcon}
              alt="Back Icon"
              className="edit-warehouse__back-icon"
            />
            <h1 className="edit-warehouse__title">Edit Warehouse</h1>
          </div>
          <hr className="edit-warehouse__divider" />
          <div className="edit-warehouse__items">
            <div className="edit-warehouse__section">
              <h2 className="edit-warehouse__section-title">
                Warehouse Details
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="warehouseName">Warehouse Name</label>
                  <br />
                  <input
                    type="text"
                    id="warehouseName"
                    name="warehouseName"
                    value={warehouseData.warehouseName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="address">Street Address</label>
                  <br />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={warehouseData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="city">City</label>
                  <br />
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={warehouseData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="country">Country</label>
                  <br />
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={warehouseData.country}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
            <hr className="edit-warehouse__divider edit-warehouse__divider-second" />
            <div className="edit-warehouse__section">
              <h2 className="edit-warehouse__section-title">Contact Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="contactName">Contact Name</label>
                  <br />
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={warehouseData.contactName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="position">Position</label>
                  <br />
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={warehouseData.position}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={warehouseData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={warehouseData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="edit-warehouse__buttons">
            <button className="edit-warehouse__cancel-button">Cancel</button>
            <button className="edit-warehouse__save-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditWarehouse;
