import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [sortby, setSortby] = React.useState('');

  const handleChange = (event) => {
    setSortby(event.target.value);
  };

  return (
    <Box size={props.size} sx={{ minWidth: 140, fontSize: 10 }}>
      <FormControl fullWidth size={props.size}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortby}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value={'price'}>Price</MenuItem>
          <MenuItem value={'distance'}>Distance</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}