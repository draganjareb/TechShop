import "../styles/pageThree.style.css";
import fold from "../../../assets/pictures/zFold.jpg";
import samsungTv from "../../../assets/pictures/SamsungTV.jpg";

const PageThree = () => {
  return (
    <div className="pageThreeHolder">
      <h1>Uskoro u ponudi</h1>
      <div className="firstOffer">
        <div className="firstOfferImages">
          <img src={fold} alt="GalaxyZFold6" className="samsungFoldTV" />
        </div>
        <div className="firstOfferText">
          <h2>Samsung</h2>
          <h3 className="zFold">Z Fold 6 5G</h3>
          <p>
            Novi Galaxy Z Fold 6 će imati širi, ali tanji dizajn, kao i novi
            "Ironflex" ekran koji bi trebao biti izdržljiviji. Možete očekivati
            ​ i najnoviji Snapdragon 8 Gen 3 čip, koji bi trebao donijeti bolje
            performanse i duže trajanje baterije, kao i sve iste Galaxy AI
            funkcije na Galaxy S24 seriji, plus nadamo se neke nove.
          </p>
        </div>
      </div>
      <div className="secondOffer">
        <div className="secondOfferText">
          <h2>Samsung</h2>
          <h3 className="neoTV">Neo OLED 8K</h3>
          <p>
            Neo QLED QN900D i QN800D su najnoviji Samsungovi 8K televizori, koji
            nude sliku od 7.680 puta 4.320 u veličinama u rasponu od 65 do 85
            inča. QN900D ima kompanijski ažurirani 8K AI Upscaling Pro motor za
            obradu slike za konvertovanje 4K videa u 8K uz zadržavanje i
            prečišćavanje detalja, kao i konverziju 480p, 720p i 1080p sadržaja
            u 4K, gdje se konvencionalno povećava kako bi se uklopio u 8K panel
            AI karakteristike.
          </p>
        </div>
        <div className="secondOfferImages">
          <img src={samsungTv} alt="samsungTV" className="samsungFoldTV" />
        </div>
      </div>
    </div>
  );
};

export default PageThree;
