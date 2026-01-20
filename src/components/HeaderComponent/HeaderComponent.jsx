import MenuComponent from "../MenuComponent/MenuComponent";
import logo from "../../assets/logo_ags.webp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { mainData } from "../../core/data/layoutData";

const HeaderComponent = () => {
  const navigate = useNavigate();
  let classView = "";

  const { language } = useSelector((state) => state.menuComponentReducer);
  const { activity } = useSelector((state) => state.headerComponentReducer);

  const goToHomePortfolio = () => {
    navigate("/");
  };
  return (
    <header className="header-menu container">
      <div
        className="header-logo"
        onClick={goToHomePortfolio}
        title={mainData.go_home[language]}
      >
        {activity === "portfolio" ?(
          <>
          <img
          src={logo}
          alt="Logo diseñado del autor"
          className="logo"
        />
        <p className="header-author-name">
          Alejandro García Serrano
        </p></>
        ) : (
          <img className="logo-none"></img>
        )}
      </div>
      <MenuComponent />
    </header>
  );
};

export default HeaderComponent;
