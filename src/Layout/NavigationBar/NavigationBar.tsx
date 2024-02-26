import { useNavigate } from "react-router-dom";
import { NAVIGATION_LIST } from "@common/constants/constants";
import { BasicButton } from "@common/components";
import "./NavigationBar.scss";

export const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-bar">
      <div className="navigation-bar__menu">
        {NAVIGATION_LIST.map((navigation) => (
          <BasicButton
            key={navigation}
            variant={"text"}
            className={"navigation-bar__menu-button"}
            onClick={() => navigate(`/${navigation}`)}
            children={navigation}
          />
        ))}
      </div>
    </div>
  );
};
