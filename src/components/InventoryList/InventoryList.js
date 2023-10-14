import React, { useState, useEffect } from "react";
import "./InventoryList.scss"; // Import the SCSS
import searchIcon from "../../assets/images/search-24px.svg"; // Import the search icon image
import chevronRightIcon from "../../assets/images/chevron_right-24px.svg"; // Import the right chevron icon image
import editIcon from "../../assets/images/edit-24px.svg"; // Import the edit icon image
import deleteIcon from "../../assets/images/delete_outline-24px.svg"; // Import the delete icon image
import dummyData from "./dummyData"; // Import the dummy data

const InventoryCard = () => {
  const [inventoryData, setInventoryData] = useState(dummyData); // Initialize state variable for inventory data

  useEffect(() => {
    // Use the useEffect hook to fetch data from an API
    fetch("using dummy data") // Replace with your actual API endpoint
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setInventoryData(data)) // Update inventoryData state with fetched data
      .catch((error) => console.error("Error fetching data: " + error)); // Handle errors
  }, []); // The empty dependency array ensures this runs once after initial render

  return (
    <div className="inventory-list">
      <div className="inventory-card">
        <div className="inventory-nav">
          <h1 className="inventory-card__title">Inventory</h1>
          <div className="inventory-card__search-bar">
            <input
              className="inventory-card__search-bar__input"
              type="text"
              placeholder="Search..."
            />
            <div className="inventory-card__search-bar__icon-container">
              <img
                src={searchIcon}
                alt="Search Icon"
                className="inventory-card__search-bar__icon"
              />
            </div>
          </div>
          <button className="inventory-card__add-button">+ Add New Item</button>
        </div>
        <div className="inventory-list">
          <div className="grid-container">
            {inventoryData.map((item) => (
              <div key={item.id} className="item">
                <div className="inventory-card__divider"></div>

                <div className="content">
                  <div className="left-column">
                    <span className="item-label">INVENTORY ITEM</span>
                    <br />
                    <a href="/new-link-url" className="item-link">
                      <span className="item-value inven blue">
                        {item.inventoryItem}
                        <img
                          src={chevronRightIcon}
                          alt="Right Arrow"
                          className="chevron-icon"
                          style={{ verticalAlign: "middle" }}
                        />
                      </span>
                    </a>
                    <br />
                    <br />
                    <span className="item-label">CATEGORY</span> <br />
                    <span className="item-value">{item.category}</span>
                  </div>
                  <div className="right-column">
                    <span className="item-label">STATUS</span> <br />
                    <span
                      className={
                        item.status === "In Stock" ? "in-stock" : "out-of-stock"
                      }
                    >
                      {item.status}
                    </span>
                    <br />
                    <br />
                    <span className="item-label">QTY</span> <br />
                    <span className="item-value">{item.qty}</span>
                    <br />
                    <br />
                    <span className="item-label">WAREHOUSE</span> <br />
                    <span className="item-value">{item.warehouse}</span>
                  </div>
                </div>
                <div className="actions custom-actions">
                  <span className="item-label custom-actions">ACTIONS</span>
                  <a
                    href={`/edit-page/${item.id}`}
                    className="action-icon edit-icon"
                  >
                    <img src={editIcon} alt="Edit" />
                  </a>
                  <a
                    href={`/delete-page/${item.id}`}
                    className="action-icon delete-icon"
                  >
                    <img src={deleteIcon} alt="Delete" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
