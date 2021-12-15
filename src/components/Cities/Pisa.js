import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Pisa = () => {
  const position = [43.72480913435435, 10.396363390281639];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://i.sozcu.com.tr/wp-content/uploads/2019/04/29/iecrop/pi2_16_9_1556527813.jpg"
          alt="Pisa view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Pisa</h1>
        <i>"Eğik Pisa Kulesi ve Galileo Galilei"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Pisa hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>Pisa'da gezilecek yerler.</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Pisa'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>Pisa için ulaşım bilgileri.</div>
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

export default Pisa;
