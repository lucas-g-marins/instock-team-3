import React, { useState } from "react";
import DeleteInventoryModal from "./components/DeleteInventory/DeleteInventory";
// import Footer from "./components/footer/footer";
// import EditWarehouse from './components/EditWarehouse/EditWarehouse'; // Import the EditWarehouse component
// import InventoryPage from "./components/InventoryList/InventoryList"; // Import the Inventory Page component

const App = () => {
  const [isDeleteInventoryModalOpen, setDeleteInventoryModalOpen] =
    useState(false);
  const [itemNameToDelete, setItemNameToDelete] = useState(""); // Initialize the item name state

  const openDeleteInventoryModal = (itemName) => {
    setItemNameToDelete(itemName); // Set the item name before opening the modal
    setDeleteInventoryModalOpen(true);
  };

  const closeDeleteInventoryModal = () => {
    setItemNameToDelete(""); // Clear the item name when closing the modal
    setDeleteInventoryModalOpen(false);
  };

  const handleDelete = () => {
    // Handle the deletion logic here, e.g., make an API request.
    // Once deleted, close the Delete Inventory modal.
    closeDeleteInventoryModal();
  };

  const handleCancel = () => {
    // Implement the cancel action here, such as resetting any form fields.
    closeDeleteInventoryModal();
  };

  return (
    <div className="app">
      <DeleteInventoryModal
        isOpen={isDeleteInventoryModalOpen}
        onClose={closeDeleteInventoryModal}
        onDelete={handleDelete}
        onCancel={handleCancel}
        itemName={itemNameToDelete} // Pass the item name as a prop
      />
      {/* <EditWarehouse /> */}
      {/* <InventoryPage />  */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
