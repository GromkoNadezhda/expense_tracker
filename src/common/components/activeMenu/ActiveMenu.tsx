import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import "./ActiveMenu.scss"

interface IActiveMenuProps {
  className: string;
  menuItems: [];
  onClick: () => void;
}

export const ActiveMenu = ({ className, menuItems, onClick }: IActiveMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <div className="active-menu">
      <IconButton
        className={className}
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        className="active-menu__wrapper"
      >
        {menuItems.map((menu_item) => (
          <MenuItem  className="active-menu__item" id={menu_item} key={menu_item} onClick={onClick}>
            {menu_item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
