import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Trier = () => {
  const position = [49.76187052476956, 6.647887478135581];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://www.turrehberin.com/wp-content/uploads/2016/07/trier-turrehberin.jpg"
          alt="Trier view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Trier</h1>
        <i>"Almanya'nın en eski şehri"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Trier hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>Trier'de gezilecek yerler.</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Trier'de yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Trier için ulaşım bilgileri.
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

export default Trier;
