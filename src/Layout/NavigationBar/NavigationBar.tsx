import { useNavigate } from "react-router-dom";
import { NAVIGATION_LIST } from "@common/constants/constants";
import "./NavigationBar.scss";
import { BasicButton } from "@common/components";

export const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation-bar">
      <div className="navigation-bar__menu">
        {NAVIGATION_LIST.map((position) => (
          <BasicButton 
          variant={'text'}
          className={'navigation-bar__menu-position'}
          onClick={() => navigate(`/${position}`)}
          children={<span className="expenses__btn-text">{position}</span>}/>
        ))}
      </div>
    </div>
  );
};
