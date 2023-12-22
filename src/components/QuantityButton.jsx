import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { cartContext } from "../pages/Cart";

export default function QuantityButton({ thisItem, cart }) {
  const [quantity, setQuantity] = React.useState(1);
  const { handleQuantityChange } = React.useContext(cartContext);

  const handleChange = (event) => {
    thisItem.quantity = event.target.value;
    setQuantity(event.target.value);handleQuantityChange(thisItem, event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Quantity</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={
          cart
            ? cart.find((element) => element.id == thisItem.id).quantity
            : null
        }
        label="Add To Cart"
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
      </Select>
    </FormControl>
  );
}
