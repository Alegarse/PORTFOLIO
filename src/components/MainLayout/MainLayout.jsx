import { Outlet } from "react-router-dom";
import ChatBotComponent from "../ChatBot/ChatBotComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { activity } = useSelector((state) => state.headerComponentReducer);
  return (
    <div className="main-layout">
      <HeaderComponent />
      <ChatBotComponent />
      <Outlet />
      {activity === "portfolio" && <FooterComponent />}
    </div>
  );
};

export default MainLayout;
