import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const SakızAdası = () => {
  const position = [38.37362568843665, 26.130873649215896];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://cdn.neredekal.com/blog/BTR/760x380/sakiz-adasi-hakkinda-mutlaka-bilinmesi-gerekenler.jpg"
          alt="Sakız Adası view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Sakız Adası</h1>
        <i>"Damla sakızının başkenti"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Sakız Adası hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Sakız Adası'nda gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>
            Sakız Adası'nda yemek yerleri
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Sakız Adası için ulaşım bilgileri.
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

export default SakızAdası;
