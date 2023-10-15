// import React, { useState } from "react";
import * as React from "react";
import axios from "axios";

// import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";
// import { styled } from "@mui/system";

// export default function DeleteWarehouse({ warehouseid, warehousename, icon }) {
//   const apiURL = process.env.REACT_APP_DATA;
//   //   const [anchor, setAnchor] = (React.useState < null) | (HTMLElement > null);
//   const [open, setOpen] = React.useState(false);

//   const deleteWarehouse = async () => {
//     try {
//       const { data } = await axios.delete(
//         `${apiURL}/warehouses/${warehouseid}`
//       );
//       console.log(data);
//       //   setWarehouseData(...data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <div onClick={() => setOpen(true)}>{icon}</div>


      {/* <Popup open={open}>
        <PopupBody>
          <h1>Delete {warehousename} warehouse?</h1>
          <p>
            Please confirm that you'd like to delete the {warehousename} from
            the list of warehouses. You won't be able to undo the section.
          </p>
          <button
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteWarehouse();
            }}
          >
            Detele
          </button>
        </PopupBody>
      </Popup> */}
    </div>
  );
}


// const grey = {
//   50: "#f6f8fa",
//   200: "#d0d7de",
//   500: "#6e7781",
//   700: "#424a53",
//   900: "#24292f",
// };

// const blue = {
//   500: "#007FFF",
//   600: "#0072E5",
//   700: "#0059B2",
// };

// const PopupBody = styled("div")(
//   ({ theme }) => `
//   width: max-content;
//   padding: 12px 16px;
//   margin: 8px;

//   border-radius: 8px;
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
//   box-shadow: ${
//     theme.palette.mode === "dark"
//       ? `0px 4px 8px rgb(0 0 0 / 0.7)`
//       : `0px 4px 8px rgb(0 0 0 / 0.1)`
//   };
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.875rem;
//   z-index: 1;
// `
// );

// const Button = styled("button")`
//   font-family: "IBM Plex Sans", sans-serif;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   background-color: ${blue[500]};
//   color: white;

//   border-radius: 8px;
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
//   background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
//   box-shadow: ${
//     theme.palette.mode === "dark"
//       ? `0px 4px 8px rgb(0 0 0 / 0.7)`
//       : `0px 4px 8px rgb(0 0 0 / 0.1)`
//   };
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.875rem;
//   z-index: 1;
// `
// );

// // const Button = styled("button")`
// //   font-family: "IBM Plex Sans", sans-serif;
// //   font-size: 0.875rem;
// //   line-height: 1.5;
// //   background-color: ${blue[500]};
// //   color: white;
// //   border-radius: 8px;
// //   font-weight: 600;
// //   padding: 8px 16px;
// //   cursor: pointer;
// //   transition: all 150ms ease;
// //   border: none;

// //   &:hover {
// //     background-color: ${blue[600]};
// //   }

// //   &:active {
// //     background-color: ${blue[700]};
// //   }

// //   &:focus-visible {
// //     box-shadow: 0 4px 20px 0 rgb(61 71 82 / 0.1), 0 0 0 5px rgb(0 127 255 / 0.5);
// //     outline: none;
// //   }
// // `;
