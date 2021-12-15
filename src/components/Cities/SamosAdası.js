import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const SamosAdası = () => {
  const position = [37.76127894406907, 26.97702566031795];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://www.holidayify.com/wp-content/uploads/samos-island-1.jpg"
          alt="Samos Adası view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Samos Adası</h1>
        <i>"Eşsiz plajları ile büyüleyen bir atmosfer"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Samos Adası hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Samos Adası'nda gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>
            Samos Adası'nda yemek yerleri
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Samos Adası için ulaşım bilgileri.
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

export default SamosAdası;
