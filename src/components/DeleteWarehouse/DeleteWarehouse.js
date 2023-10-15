import React, { useState } from "react";
// import * as React from "react";
import axios from "axios";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
import { styled } from "@mui/system";
import "./DeleteWarehouse.scss";

export default function DeleteWarehouse({ warehouseid, warehousename, icon }) {
  const apiURL = process.env.REACT_APP_DATA;
  // const [anchor, setAnchor] = (React.useState < null) | (HTMLElement > null);
  const [open, setOpen] = React.useState(false);

  const deleteWarehouse = async () => {
    try {
      const { data } = await axios.delete(
        `${apiURL}/warehouses/${warehouseid}`
      );
      console.log(data);
      // setWarehouseData(...data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <div onClick={() => setOpen(true)}>{icon}</div>

      <Popup className="modalcontainer" open={open}>
        <PopupBody className="modal">
          <h1>Delete {warehousename} warehouse?</h1>
          <p className="modalText">
            Please confirm that you'd like to delete the {warehousename} from
            the list of warehouses. You won't be able to undo the section.
          </p>
          <div className="buttonContainer">
            <button
              className="cancelButton"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="deleteButton"
              onClick={() => {
                deleteWarehouse();
              }}
            >
              Detele
            </button>
          </div>
        </PopupBody>
      </Popup>
    </div>
  );
}

const grey = {
  50: "#f6f8fa",
  200: "#d0d7de",
  500: "#6e7781",
  700: "#424a53",
  900: "#24292f",
};

const blue = {
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const PopupBody = styled("div")();
