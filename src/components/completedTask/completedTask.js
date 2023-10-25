import { Box, IconButton } from "@mui/material";
import React from "react";
import Undo from "@mui/icons-material/Undo";

export const CompletedTask = ({ completedItems, Replace }) => {
  return (
    <Box>
      <div className="Complete-task">
        <h2 className="heading">Completed Tasks</h2>
        <ol className="text-Font">
          {completedItems.map((val, index) => (
            <li
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {index + 1}.{val}- {new Date().toLocaleTimeString()}
              <Box>
                <IconButton
                  onClick={() => Replace(index)}
                  style={{ flexDirection: "right", color: "blue" }}
                >
                  <Undo />
                </IconButton>
              </Box>
            </li>
          ))}
        </ol>
      </div>
    </Box>
  );
};
