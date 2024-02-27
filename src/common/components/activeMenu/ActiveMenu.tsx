import { ReactNode, useState } from "react";
import { IconButton, Menu } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import "./ActiveMenu.scss";

interface IActiveMenuProps {
  className: string;
  children?: ReactNode;
}

export const ActiveMenu = ({ className, children }: IActiveMenuProps) => {
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
        {children}
      </Menu>
    </div>
  );
};
