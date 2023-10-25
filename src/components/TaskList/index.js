import React from "react";
import { Box, IconButton } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import "./todolist.css";

const Todolist = ({ Editt, handleDelete, handleComplete, newItem }) => {
  return (
    <div>
      <div className="Input-task">
        <h2 className="heading">Input Tasks</h2>
        <Box>
          <ol className="text-Font">
            {newItem.map((val, index) => {
              const timestamp = new Date().toLocaleTimeString();
              return (
                <li
                  key={index}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    {index + 1}. {val} - {timestamp}
                  </div>
                  <Box>
                    <IconButton onClick={() => Editt(index)}>
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(index)}
                      style={{ color: "#7E57C2" }}
                    >
                      <Delete />
                    </IconButton>
                    <IconButton
                      onClick={() => handleComplete(index)}
                      style={{ color: "lightgreen" }}
                    >
                      <AddTaskIcon />
                    </IconButton>
                  </Box>
                </li>
              );
            })}
          </ol>
        </Box>
      </div>
    </div>
  );
};

export default Todolist;
