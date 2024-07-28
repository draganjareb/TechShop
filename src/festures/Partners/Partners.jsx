import "../Partners/partners.style.css";
import fedex from "../../assets/pictures/fedex.jpg";
import meeting from "../../assets/pictures/meeting.png";
import euroexpress from "../../assets/pictures/euroexpress.png";
import a2b from "../../assets/pictures/a2b.jpg";

const Partners = () => {
  return (
    <div className="partnersWrapper">
      <div className="partnersHolder">
        <div className="partnersCard">
          <img src={meeting} alt="meeting" className="partnersFisrtImg" />
          <h2>
            U današnjem vremenu kada je konkurencija velika važno je naći dobre
            partnere za saradnju. Pored tržišta koje je jedno od osnovnih uslova
            za dobro poslovanje i dobar uspjeh firme treba istaknuti partnere sa
            kojima imamo važnu, značajnu saradnju da naši proizvodi brzo i
            kvalitetno dođu do naših kupaca.
          </h2>
        </div>
        <div className="partnersCard">
          <img src={fedex} alt="FedEx" />
          <div>
            <p>
              FedEx Express je glavna američka kargo aviokompanija sa sjedištem
              u Memphisu, Tennessee, Sjedinjene Američke Države. Od 2023.
              godine, to je najveća svjetska kargo aviokompanija u smislu
              veličine flote i tona tereta koji se preveze. To je istoimena i
              vodeća podružnica korporacije FedEx, koja svakodnevno isporučuje
              teret i pakete na više od 375 destinacija u 220 zemalja na šest
              kontinenata. FedEx Express je također najveća svjetska kompanija
              za ekspresni transport.
            </p>
            <a
              href="https://en.wikipedia.org/wiki/FedEx_Express"
              target="_blank"
            >
              Pročitaj još...
            </a>
          </div>
        </div>
        <div className="partnersCard">
          <div>
            <p>
              Osnovani smo 2008. godine sa sjedištem u Banjaluci, te smo jasnom
              strategijom, stručnim i kvalitetnim kadrom i povjerenjem korisnika
              razvili mrežu svojih poslovnica sa kojom obezbjeđujemo 100%
              pokrivenosti svih mjesta i gradova u zemlji.
            </p>
            <a
              href="https://www.euroexpress.ba/o-nama/istorijat"
              target="_blank"
            >
              Pročitaj još...
            </a>
          </div>
          <img src={euroexpress} alt="euroexpress" />
        </div>
        <div className="partnersCard">
          <img src={a2b} alt="a2b" />
          <div>
            <p>
              A2B je najveća domaća transportna kompanija koja nudi raznovrstan
              portfolio različitih usluga na svim nivoima. Svojim kapacitetima
              nudi klijentima najsavremeniju i najpouzdaniju transportnu mrežu
              za slanje i prijem pošiljki. Naša vodilja je potpuna orjentacija
              ka Vašim potrebama u ovom polju, kako bi se Vi što uspješnije
              takmičili na domaćem tržištu. Saradnja sa A2B čini poslovanje u
              zemlji jednostavnijim, lakšim i profitabilnijim.
            </p>
            <a href="https://a2b.ba/o-nama/" target="_blank">
              Pročitaj još...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
