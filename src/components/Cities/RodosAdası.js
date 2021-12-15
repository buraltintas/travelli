import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const RodosAdası = () => {
  const position = [36.438485823477805, 28.219539608155248];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://res.cloudinary.com/turna/images/q_auto:low/v1628520024/rodos-gezi-rehberi/rodos-gezi-rehberi.webp?_i=AA"
          alt="Rodos Adası view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Rodos Adası</h1>
        <i>"On İki Adalar'ın başkenti"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Rodos Adası hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Rodos Adası'nda gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>
            Rodos Adası'nda yemek yerleri
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Rodos Adası için ulaşım bilgileri.
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

export default RodosAdası;
