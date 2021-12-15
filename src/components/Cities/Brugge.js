import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Brugge = () => {
  const position = [51.2142632474308, 3.2270468052396746];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2021-08/brugge-hakkinda-bilinmesi-gerekenler.jpg"
          alt="Brugge view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Brugge</h1>
        <i>
          "En çok turist alan ve mutlaka görülmesi gereken kentlerin başında
          geliyor"
        </i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Brugge hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>Brugge'de gezilecek yerler.</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Brugge'de yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Brugge için ulaşım bilgileri.
          </div>
        </details>
      </div>
      <div className={classes.map}>
        <MapContainer
          style={{ width: "58rem", height: "38rem" }}
          center={position}
          zoom={12}
          scrollWheelZoom={true}
          className={classes.mapContainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Brugge;
