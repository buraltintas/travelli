import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Barcelona = () => {
  const position = [41.40715830720515, 2.166498321677008];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://static.dezeen.com/uploads/2020/11/eixample-barcelona-aerial-view_dezeen_2364_sq.jpg"
          alt="barcelona view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Barcelona</h1>
        <i>"Katalonya özerk bölgesinin başkenti"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Barcelona hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Barcelona'da gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Barcelona'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Barcelona için ulaşım bilgileri.
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

export default Barcelona;
