import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Floransa = () => {
  const position = [43.79912403370647, 11.265843939954808];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://img-s2.onedio.com/id-56fd67cc43d83e643878f4a4/rev-0/w-620/f-jpg/s-905abff0a3eadc5b65dd98e9157e9328dcc33598.jpg"
          alt="floransa view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Floransa</h1>
        <i>"İtalyan Rönesansı'nın doğum yeri"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Floransa hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Floransa'da gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Floransa'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Floransa için ulaşım bilgileri.
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

export default Floransa;
