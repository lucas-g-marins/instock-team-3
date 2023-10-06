import React from "react";
import { NavLink } from "react-router-dom";

const Warehouse = () => {
  // Entered Started Lorem Ipsum for Visualization of Routes

  return (
    <section>
      <div className="warehouse__nav">
        <h1 className="warehouse__title">Warehouses</h1>
        <div className="warehouse__nav-right">
          <form className="warehouse__form">
            <label className="warehouse__form-label" htmlFor="text"></label>
            <input
              className="warehouse__form-search"
              placeholder="Search..."
              name="text"
            />
            <img
              className="warehouse__form-search-icon"
              src={""}
              alt="search-icon"
            />
          </form>
          <NavLink to="/warehouses/">
            <button className="warehouse__button" type="submit">
              <h3 className="warehouse__button-text">+Add New Warehouse</h3>{" "}
            </button>
          </NavLink>
        </div>
      </div>
      <ul className="warehouse-topbar">
        <li className="warehouse-topbar__warehouse">WAREHOUSE</li>
        <li className="warehouse-topbar__address">ADDRESS</li>
        <li className="warehouse-topbar__contact-name">CONTACT NAME</li>
        <li className="warehouse-topbar__contact-information">
          {" "}
          CONTACT INFORMATION
        </li>
        <li className="warehouse-topbar__actions"> ACTIONS </li>
      </ul>
    </section>
  );
};

export default Warehouse;
