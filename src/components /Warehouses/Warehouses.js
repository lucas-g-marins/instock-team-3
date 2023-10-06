import React from "react";
import { NavLink } from "react-router-dom";

const Warehouse = () => {
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
      <table>
        <thead>
          <tr>
            <th>WAREHOUSE</th>
            <th>ADDRESS</th>
            <th>CONTACT NAME</th>
            <th>CONTACT Information</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{/* Add table rows and data here */}</tbody>
      </table>
    </section>
  );
};

export default Warehouse;
