import * as React from "react";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

export default function CheckboxLabels({ callBackFun, brand, value, filter_type }) {
  const [isChecked, setIsChecked] = useState(value);

  function handleCheckbox() {
    const updatedValue = !isChecked;
    setIsChecked(updatedValue);
    callBackFun(brand, updatedValue, filter_type);
  }
  
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            onChange={()=>handleCheckbox(isChecked)}
            checked={isChecked}
            size="small"
          />
        }
        label={
          <Typography variant="body2" style={{ fontSize: "13px" }}>
            {brand}
          </Typography>
        }
      />
    </FormGroup>
  );
}
