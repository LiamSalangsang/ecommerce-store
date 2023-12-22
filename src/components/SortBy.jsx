import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { alphabetize } from "../../public/helper";
import { Reducer } from "react";

export default function SortBy({ subOption }) {
  const handleSelect = (e, value) => {
    if (value == null) {
      subOption("");
      // sub({
      //   type: 'change_none'
      // })
    } else {
      console.log(value.label);
      subOption(value.label);

      // sub({
      //   type: value.label
      // })
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={sortingOptions}
      onChange={handleSelect}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Sort By" />}
    />
  );
}

const sortingOptions = [
  { label: "A-Z" },
  { label: "Z-A" },
  { label: "Price High to Low" },
  { label: "Price Low to High" },
  { label: "Deals First" },
  { label: "Customer Rating" },
];
