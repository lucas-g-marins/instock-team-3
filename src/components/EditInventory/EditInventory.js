import React, { useEffect, useState } from "react";
import "./EditInventory.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BackArrow from "../../assets/icons/arrow_back-24px.svg";

const EditInventory = () => {
  const { id } = useParams;

  const [warehouseData, setWarehouseData] = useState([]);

  //   state to store form values
  const [inventoryData, setInventoryData] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInventoryData({ ...inventoryData, [name]: value });
  };

  const apiURL = process.env.REACT_APP_DATA;

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`${apiURL}/inventories/${id}`, { inventoryData })
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  };

  //   quantity show and hide
  const handleQuantity = () => {
    setQuantityClass("edit-inventory__quantity--hide");
  };

  const showQuantity = () => {
    setQuantityClass("edit-inventory__quantity");
  };

  const [quantityClass, setQuantityClass] = useState(
    "edit-inventory__quantity--hide"
  );

  //   pull warehouse information
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiURL}/warehouses`);
        setWarehouseData(data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="edit-inventory">
      <div className="edit-inventory__header">
        <Link to={"/warehouselist"}>
          <img src={BackArrow}></img>
        </Link>
        <h1 className="edit-inventory__title">Edit Inventory Item</h1>
      </div>
      <div className="edit-inventory__border"></div>
      <form className="edit-inventory__form">
        <div className="edit-inventory__details">
          <h2 className="edit-inventory__sub-title">Item Details</h2>
          <label>
            Item Name
            <input type="text"></input>
          </label>
          <label className="edit-inventory__label">
            Description
            <textarea></textarea>
          </label>
          <label className="edit-inventory__label">
            Category
            <select id="category" name="category">
              <option value="accessories">Accessories</option>
              <option value="apparel">Apparel</option>
              <option value="electronics">Electronics</option>
              <option value="gear">Gear</option>
              <option value="health">Health</option>
            </select>
          </label>
        </div>
        <div className="edit-inventory__border"></div>
        <div className="edit-inventory__availability">
          <h2 className="edit-inventory__sub-title">Item Availability</h2>
          <h3>Status</h3>
          <div className="edit-inventory__stock">
            <div className="edit-inventory__instock">
              <input
                type="radio"
                id="instock"
                name="stock"
                value="instock"
                className="edit-inventory__radio"
                onClick={showQuantity}
              ></input>
              <label>In Stock</label>
            </div>
            <div className="edit-inventory__outstock">
              <input
                type="radio"
                id="outstock"
                name="stock"
                value="outstock"
                className="edit-inventory__radio"
                onClick={handleQuantity}
              ></input>
              <label>Out Of Stock</label>
            </div>
          </div>
          <label className={quantityClass}>
            Quantity
            <input type="number"></input>
          </label>
          <label>
            Warehouse
            <select>
              {warehouseData.map((warehouse) => (
                <option
                  value={warehouse.warehouse_name}
                  key={warehouse.warehouse_id}
                >
                  {warehouse.warehouse_name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="edit-inventory__footer">
          <button className="edit-inventory__cancel">Cancel</button>
          <button type="submit" className="edit-inventory__save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditInventory;
