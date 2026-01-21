import React from "react";
import {
  Code2,
  FileCode,
  Palette,
  Code,
  Layers,
  Server,
  FileType,
  Terminal,
  Database,
} from "lucide-react";
import { namesLanguages } from "../../core/data/dataChallenges/config";
import { textNBCh } from "../../core/data/dataChallenges/dataChallengesPage";
import { useSelector } from "react-redux";

const iconsLanguages = {
  html: <FileCode size={24} />,
  css: <Palette size={24} />,
  javascript: <Terminal size={24} />,
  react: <Code2 size={24} />,
  redux: <Layers size={24} />,
  nodejs: <Server size={24} />,
  mongodb: <Database size={24} />,
  mysql: <Database size={24} />,
  typescript: <FileType size={24} />,
  python: <Code size={24} />,
};

const NavbarLateral = ({
  className = "",
  devLanguages,
  devLanguageSelected,
  onHandleSelectDevLang,
}) => {
  const { language } = useSelector((state) => state.menuComponentReducer);

  return (
    <aside className={`navbar-lateral ${className}`}>
      <div className="navbar-header">
        <Code size={28} />
        <h2>{textNBCh.navTitle[language]}</h2>
      </div>

      <nav className="navbar-nav">
        <ul>
          {devLanguages.map((language) => (
            <li key={language}>
              <button
                className={`nav-item ${language === devLanguageSelected ? "activo" : ""}`}
                onClick={() => onHandleSelectDevLang(language)}
                style={{
                  "--color-lenguaje":
                    language === "javascript" ? "#323330" : null,
                }}
              >
                <span className="icono-lenguaje">
                  {iconsLanguages[language]}
                </span>
                <span className="nombre-lenguaje">
                  {namesLanguages[language]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-footer">
        <small>{textNBCh.navHeader[language]}</small>
      </div>
    </aside>
  );
};

export default NavbarLateral;
