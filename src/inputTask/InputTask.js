import React from "react";
import { Button } from "@mui/material";

export const InputTask = ({
  item,
  handleItemChange,
  AddOrUpdate,
  editMode,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {" "}
      <input
        type="text"
        value={item}
        placeholder="Hello"
        onChange={handleItemChange}
      />
      <Button
        className="Add-Btn"
        sx={{ marginTop: "34px" }}
        onClick={AddOrUpdate}
        disabled={!item}
      >
        {editMode ? "Update" : "Add"}
      </Button>
    </div>
  );
};
