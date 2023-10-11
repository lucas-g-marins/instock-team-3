import React from "react";
import "./WarehouseCard.scss";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
import EditIcon from "../../assets/icons/edit-24px.svg";
import ChevronIcon from "../../assets/icons/chevron_right-24px.svg";

function WarehouseCard({ city, address, name, phone, email }) {
  return (
    <div className="warehousecard">
      <div className="warehousecard__info">
        <div className="warehousecard__location">
          <h4 className="warehousecard__copy warehousecard__title">
            WAREHOUSE
          </h4>
          <div className="warehousecard__name-container">
            <h3 className="warehousecard__city">{city}</h3>
            <img src={ChevronIcon}></img>
          </div>
          <h4 className="warehousecard__copy warehousecard__title">ADDRESS</h4>
          <h4 className="warehousecard__copy">{address}</h4>
        </div>
        <div className="warehousecard__contact">
          <h4 className="warehousecard__copy warehousecard__title">
            CONTACT NAME
          </h4>
          <h4 className="warehousecard__copy">{name}</h4>
          <h4 className="warehousecard__copy warehousecard__title">
            CONTACT INFORMATION
          </h4>
          <div className="warehousecard__contact-info">
            <h4 className="warehousecard__copy">{phone}</h4>
            <h4 className="warehousecard__copy">{email}</h4>
          </div>
        </div>
      </div>
      <div className="warehousecard__icons">
        <img src={DeleteIcon}></img>
        <img src={EditIcon}></img>
      </div>
    </div>
  );
}

export default WarehouseCard;
