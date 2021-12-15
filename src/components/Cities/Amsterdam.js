import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Amsterdam = () => {
  const position = [52.37728588028861, 4.899152382209149];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://i4.hurimg.com/i/hurriyet/75/1110x740/57f1ffee18c77311bc57b30a.jpg"
          alt="amsterdam view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Amsterdam</h1>
        <i>"Avrupa'nın en özgür şehri"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Amsterdam hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Amsterdam'da gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Amsterdam'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Amsterdam için ulaşım bilgileri.
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

export default Amsterdam;
