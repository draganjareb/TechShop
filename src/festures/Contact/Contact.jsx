import "../Contact/contact.style.css";
import maps from "../.."

const Contact = () => {
  return (
    <div className="contactWrapper">
      <div className="contactHolder">
        <div className="contactLeftSite">
          <h2>Možete nas kontaktirati na sledeće načine:</h2>
          <div className="contactData">
            <div>
              <h3>Telefon:</h3>
              <p>065/875-041</p>
            </div>
            <div>
              <h3>e-mail:</h3>
              <p>dragan931@live.com</p>
            </div>
          </div>
          <div>
            <h2>Imate pitanje za nas ili kritiku molimo upišite ovdje</h2>
            <input placeholder="Text..." />
          </div>
        </div>
        <div className="contactRightSite">
          <img src={} alt="map"
                  </div>
      </div>
    </div>
  );
};

export default Contact;
