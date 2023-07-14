import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { menuIcons } from "../../database/icons/menuIcons";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

export default function SelectMenu() {
  const [menuIcon, setMenuIcon] = React.useState([]);

  const menu = { menuIcons };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMenuIcon(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="select-menu">
      <FormControl size="small" sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Show and hide apps
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={menuIcon}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {menu.menuIcons.map((menuItem) => (
            <MenuItem key={menuItem.id} value={menuItem.name}>
              <Checkbox checked={menuIcon.indexOf(menuItem.name) > -1} />
              <ListItemText primary={menuItem.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
