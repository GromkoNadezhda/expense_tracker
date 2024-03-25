import { ReactNode } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./MenuListComposition.scss";

interface IMenuListCompositionProps {
  open: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export const MenuListComposition = ({
  open,
  onClick,
  children,
}: IMenuListCompositionProps) => {
  return (
    <div className="menu-list" onClick={onClick}>
      <button className="menu-list__button">
        <MoreVertIcon className="menu-list__icon" />
      </button>
      {open && children}
    </div>
  );
};
