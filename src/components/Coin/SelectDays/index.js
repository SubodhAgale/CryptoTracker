import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";



export default function SelectDays({days, handleDaysChange, noPTag}) {
 

  return (
    <div className="select-days">
      {!noPTag && <p>Price Change in the last </p> }
      
      <Select
        sx={{
          
          height: "2rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
       
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={15}>15 Days</MenuItem>
        <MenuItem value={30}>1 Month</MenuItem>
        <MenuItem value={60}>2 Months</MenuItem>
        <MenuItem value={152}>6 Months</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
