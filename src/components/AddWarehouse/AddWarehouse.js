import React, { useState } from "react";
import "./AddWarehouse.scss";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { Link } from "react-router-dom";

function AddWarehouse() {
  // warehouse name
  const [warehouseName, setWarehouseName] = useState("");

  const handleWarehouseName = (e) => {
    setWarehouseName(e.target.value);
  };

  const [address, setAddress] = useState("");

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const [city, setCity] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };
  // country
  const [country, setCountry] = useState("");

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  // contact name
  const [contactName, setContactName] = useState("");

  const handleContactName = (e) => {
    setContactName(e.target.value);
  };
  // position
  const [position, setPosition] = useState("");

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  // phone
  const [phone, setPhone] = useState("");

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  // email
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //   all inputs
  const inputs = [
    warehouseName,
    address,
    city,
    country,
    contactName,
    position,
    phone,
    email,
  ];

  //   error
  const [inputClass, setinputClass] = useState("add-warehouse__noerror");

  const [emailError, setEmailError] = useState("add-warehouse__noerror");

  const [phoneError, setPhoneError] = useState("add-warehouse__noerror");

  // regex
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  // api url
  const apiURL = process.env.REACT_APP_DATA;

  //   handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      if (!input.value) {
        setinputClass("add-warehouse__error");
        return false;
      }
    });
    if (!emailRegex.test(email)) {
      setEmailError("add-warehouse__error");
      console.log("email bad");
    } else if (isNaN(phone)) {
      setPhoneError("add-warehouse__error");
      console.log("phone bad");
    } else {
      console.log("form is good");
      setinputClass("add-warehouse__noerror");
      setEmailError("add-warehouse__noerror");
      setPhoneError("add-warehouse__noerror");
      axios
        .post(`${apiURL}/warehouses`, {
          warehouse_name: warehouseName,
          address: address,
          city: city,
          country: country,
          contact_name: contactName,
          contact_position: position,
          contact_phone: phone,
          contact_email: email,
        })
        .then((result) => console.log(result))
        .catch((e) => console.log(e));
    }
    console.log("what?");
  };

  return (
    <div className="add-warehouse">
      <div className="add-warehouse__header">
        <Link to={"/warehouselist"}>
          <img src={BackArrow}></img>
        </Link>
        <h1 className="add-warehouse__title">Add New Warehouse</h1>
      </div>
      <form className="add-warehouse__form" onSubmit={handleSubmit}>
        <div className="add-warehouse__details">
          <h2>Warehouse Details</h2>

          <label>
            Warehouse Name
            <input
              value={warehouseName}
              onChange={handleWarehouseName}
              type="text"
              placeholder="Warehouse Name"
              id="warehousename"
              className={inputClass}
            ></input>
          </label>
          <label>
            Street Address
            <input
              value={address}
              onChange={handleAddress}
              type="text"
              placeholder="Street Address"
              className={inputClass}
            ></input>
          </label>
          <label>
            City
            <input
              value={city}
              onChange={handleCity}
              type="text"
              placeholder="City"
              className={inputClass}
            ></input>
          </label>
          <label>
            Country
            <input
              value={country}
              onChange={handleCountry}
              type="text"
              placeholder="Country"
              className={inputClass}
            ></input>
          </label>
        </div>
        <div className="add-warehouse__border"></div>
        <div className="add-warehouse__contact-details">
          <h2>Contact Details</h2>

          <label>Contact Name</label>
          <input
            value={contactName}
            onChange={handleContactName}
            type="text"
            placeholder="Contact Name"
            className={inputClass}
          ></input>
          <label>Position</label>
          <input
            value={position}
            onChange={handlePosition}
            type="text"
            placeholder="Position"
            className={inputClass}
          ></input>
          <label>Phone Number</label>
          <input
            value={phone}
            onChange={handlePhone}
            type="text"
            placeholder="Phone number"
            className={phoneError}
          ></input>
          <label>Email</label>
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Email"
            className={emailError}
          ></input>
          <div className="add-warehouse__footer">
            <button className="add-warehouse__cancel-btn">Cancel</button>
            <button type="submit" className="add-warehouse__add-btn">
              + Add Warehouse
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddWarehouse;
