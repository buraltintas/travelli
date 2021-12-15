import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Roma = () => {
  const position = [41.89311639611272, 12.51561283166361];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/16/dd/3e/b1/el-coliseo-de-roma.jpg"
          alt="roma view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Roma</h1>
        <i>
          "Tarihi zenginlikleriyle meşhur olmasının yanı sıra, Katolik
          Kilisesinin idarî ve ruhanî merkezidir"
        </i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Roma hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>Roma'da gezilecek yerler.</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Roma'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>Roma için ulaşım bilgileri.</div>
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

export default Roma;
