import { useNavigate } from "react-router-dom";
import { NAVIGATION_LIST } from "@constants/constants";
import "./NavigationBar.scss";

export const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-bar">
      <ul className="navigation-bar__menu">
        {NAVIGATION_LIST.map((position) => (
          <li
            className="navigation-bar__menu-position"
            key={position}
            onClick={() => navigate(`/${position}`)}
          >
            {position.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};
