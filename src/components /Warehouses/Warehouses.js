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

{/* Created the following table for visualization of code */}

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
        <tbody>
          <tr>
            <td>Manhattan</td>
            <td>503 Broadway, New York, USA</td>
            <td>Parmin Aujla</td>
            <td>
              +1(629) 555-0129
              <br />
              paujla@instock.com
            </td>
          </tr>
          <tr>
            <td>Washington</td>
            <td>33 Pearl Street SW, Washington, USA</td>
            <td>Graeme Lyon</td>
            <td>
              +1(647) 504-0911 <br />
              glyon@instock.com
            </td>
          </tr>
          <tr>
            <td>New Jersey</td>
            <td>300 Main Street, New Jersey, USA</td>
            <td>Brad MacDonald</td>
            <td>
              +1(401) 377-2337
              <br />
              bmcdonald@instock.com
            </td>
          </tr>
          <tr>
            <td>San Francisco</td>
            <td>890 Brannan Street, San Francisco,USA</td>
            <td>Gary Wong</td>
            <td>
              +1(239) 555-0108
              <br />
              gwong@instock.com
            </td>
          </tr>
          <tr>
            <td>Santa Monica</td>
            <td>520 Broadway, Santa Monica, USA</td>
            <td>Sharon Ng</td>
            <td>
              +1(270) 555-0117
              <br />
              sng@instock.com
            </td>
          </tr>
          <tr>
            <td>Seattle</td>
            <td>1201 Third Avenue, Seattle, USA</td>
            <td>Daniel Bachu</td>
            <td>
              +1(480)555-0103
              <br />
              dbachu@instock.com
            </td>
          </tr>
          <tr>
            <td>Miami</td>
            <td>2650 NW 5th Avenue,Miami,USA</td>
            <td>Alana Thomas</td>
            <td>
              +1(647)832-2065
              <br />
              athomas@instock.com
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Warehouse;
