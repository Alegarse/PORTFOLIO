import { useSelector } from "react-redux";
import data from "../../../core/data/portfolioData";

const ContactMapComponent = () => {
    const { language } = useSelector((state) => state.menuComponentReducer);
  
  return (
    <>
      <div className="mapContainer">
        <iframe
          title="Approximate location"
          src="https://www.google.com/maps?q=Benalmadena,Spain&z=14&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="locationNote">{data.contact_location[language]}</p>
    </>
  );
};

export default ContactMapComponent;
