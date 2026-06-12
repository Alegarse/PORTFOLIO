import { useSelector } from 'react-redux';
import logo from '../../assets/logo_ags.webp';
import { mainData } from '../../core/data/layoutData';

const FooterComponent = () => {

  const { language } = useSelector((state) => state.menuComponentReducer);

  return (
    <footer className="footer container">
      <div className="footer-data-author">
        <div className="footer-logo">
          <img src={logo} alt="Logo diseñado del autor" className="logo" />
          <a
            href="mailto:agscm2@gmail.com"
            className="contact-info-link"
            target="_blank"
            title={mainData.send_mail[language]}
          >
            Alejandro García Serrano
          </a>
          <a
            href="https://github.com/Alegarse"
            className="contact-info-link"
            target="_blank"
            title={mainData.go_github[language]}
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
