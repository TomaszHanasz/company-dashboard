import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { menuIcons } from "../../database/icons/menuIcons";
import { useContext } from "react";
import { ThemeContext } from "../../App";

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

export function SelectMenu({ onMenuIconChange }) {
  const [menuIcon, setMenuIcon] = React.useState([]);
  const { theme } = useContext(ThemeContext);

  const menu = { menuIcons };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMenuIcon(value);
    onMenuIconChange && onMenuIconChange(value);
    console.log(menuIcon);
  };

  return (
    <div className="select-menu">
      <FormControl size="small" sx={{ m: 1, width: 250, backgroundColor: "white", borderRadius: 1}} >
        <InputLabel id="demo-multiple-checkbox-label" sx={{backgroundColor: "white", borderRadius: 1}} color="success">
          Show and hide apps
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={menuIcon}
          onChange={handleChange}
          input={<OutlinedInput style={{color: "grey", border: "1px grey solid"}}/>}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
          color="success"
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
