/* EditWarehouse.js */

import React, { useEffect, useState } from "react";
import "./EditWarehouse.scss"; // Import the SASS
import backIcon from "../../assets/images/arrow_back-24px.svg"; // Import the icon
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditWarehouse = () => {
  const { warehouseid } = useParams();

  console.log(warehouseid);

  const [defaultWarehouseData, setDefaultWarehouseData] = useState([
    {
      warehouse_name: "",
      address: "",
      city: "",
      country: "",
      contact_name: "",
      contact_position: "",
      contact_phone: "",
      contact_email: "",
    },
  ]);

  // get warehouse data
  useEffect(() => {
    if (warehouseid) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `${apiURL}/warehouses/${warehouseid}`
          );
          setDefaultWarehouseData(data);
          console.log(data);
        } catch (error) {
          console.log("Error:", error);
        }
      };
      fetchData();
    }
  }, []);

  // State to store form field values
  const [warehouseData, setWarehouseData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWarehouseData({ ...warehouseData, [name]: value });
  };

  // api url
  const apiURL = process.env.REACT_APP_DATA;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`${apiURL}/warehouses/${warehouseid}`, {
        warehouse_name: warehouseData.warehouse_name,
        address: warehouseData.address,
        city: warehouseData.city,
        country: warehouseData.country,
        contact_name: warehouseData.contact_name,
        contact_position: warehouseData.contact_position,
        contact_phone: warehouseData.contact_phone,
        contact_email: warehouseData.contact_email,
      })
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };

  console.log(defaultWarehouseData);

  return (
    <div className="edit-warehouse-container">
      <form onSubmit={handleSubmit}>
        <div className="edit-warehouse-card">
          <div className="edit-warehouse">
            <div className="edit-warehouse__header">
              <Link to={`/warehouselist`}>
                <img
                  src={backIcon}
                  alt="Back Icon"
                  className="edit-warehouse__back-icon"
                />
              </Link>
              <h1 className="edit-warehouse__title">Edit Warehouse</h1>
            </div>
            <hr className="edit-warehouse__divider" />
            <div className="edit-warehouse__items">
              <div className="edit-warehouse__section">
                <h2 className="edit-warehouse__section-title">
                  Warehouse Details
                </h2>

                <div className="edit-warehouse__form-field">
                  <label htmlFor="warehouseName">Warehouse Name</label>
                  <br />
                  <input
                    type="text"
                    id="warehouse_name"
                    name="warehouse_name"
                    value={warehouseData.warehouse_name}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].warehouse_name}
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
                    placeholder={defaultWarehouseData[0].address}
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
                    placeholder={defaultWarehouseData[0].city}
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
                    placeholder={defaultWarehouseData[0].country}
                  />
                </div>
              </div>
              <hr className="edit-warehouse__divider edit-warehouse__divider-second" />
              <div className="edit-warehouse__section">
                <h2 className="edit-warehouse__section-title">
                  Contact Details
                </h2>

                <div className="edit-warehouse__form-field">
                  <label htmlFor="contactName">Contact Name</label>
                  <br />
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    value={warehouseData.contact_name}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].contact_name}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="position">Position</label>
                  <br />
                  <input
                    type="text"
                    id="contact_position"
                    name="contact_position"
                    value={warehouseData.contact_position}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].contact_position}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <br />
                  <input
                    type="text"
                    id="contact_phone"
                    name="contact_phone"
                    value={warehouseData.contact_phone}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].contact_phone}
                  />
                </div>
                <div className="edit-warehouse__form-field">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                    type="text"
                    id="contact_email"
                    name="contact_email"
                    value={warehouseData.contact_email}
                    onChange={handleInputChange}
                    placeholder={defaultWarehouseData[0].contact_email}
                  />
                </div>
              </div>
            </div>
            <div className="edit-warehouse__buttons">
              <button className="edit-warehouse__cancel-button">Cancel</button>
              <button type="submit" className="edit-warehouse__save-button">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditWarehouse;
