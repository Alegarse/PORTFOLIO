import { Outlet } from "react-router-dom";
import ChatBotComponent from "../ChatBot/ChatBotComponent";
import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const MainLayout = () => {

  return (
    <div className="main-layout">
      <HeaderComponent />
      <ChatBotComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default MainLayout;
