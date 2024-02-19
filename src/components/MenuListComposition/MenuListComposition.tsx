import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./MenuListComposition.scss";

export const MenuListComposition = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-list">
      <button onClick={() => setOpen(!open)} className="menu-list__button">
        <MoreVertIcon className="menu-list__icon" id={id} />
      </button>
      {open && (
        <div className="menu-list__content" onClick={() => setOpen(false)}>
          <button className="menu-list__button">Details</button>
          <button className="menu-list__button">Сlear</button>
        </div>
      )}
    </div>
  );
};
