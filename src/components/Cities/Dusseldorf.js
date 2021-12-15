import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Dusseldorf = () => {
  const position = [51.23181949095872, 6.764552949018126];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://im.haberturk.com/2018/05/03/ver1552558838/2366092_bd3ccf41a6496cbc8baafbe64d060629.jpg"
          alt="dusseldorf view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Düsseldorf</h1>
        <i>"Avrupa'nın en önemli kültür ve ekonomi merkezlerinden biri"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Düsseldorf hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Düsseldorf'da gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Düsseldorf'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Düsseldorf için ulaşım bilgileri.
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

export default Dusseldorf;
