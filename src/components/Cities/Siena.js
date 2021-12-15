import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Siena = () => {
  const position = [43.324961981766094, 11.329276298978716];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://i4.hurimg.com/i/hurriyet/75/1110x740/59e9f80467b0a918d871aff7.jpg"
          alt="Siena view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Siena</h1>
        <i>
          "Piazza Del Campo meydanında Orta Çağ kökenli ünlü at yarışlarını
          izleyebilirsiniz"
        </i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Siena hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>Siena'da gezilecek yerler.</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Siena'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Siena için ulaşım bilgileri.
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

export default Siena;
