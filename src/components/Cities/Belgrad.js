import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Belgrad = () => {
  const position = [44.81314376957919, 20.462546452270168];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://res.cloudinary.com/turna/images/w_800,h_500/f_auto,q_auto/q_auto:low/v1538836192/Sirbistan-Belgrad_ttmklp/Sirbistan-Belgrad_ttmklp.webp?_i=AA"
          alt="belgrad view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Belgrad</h1>
        <i>"Beyaz şehir"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Belgrad hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Belgrad'da gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Belgrad'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Belgrad için ulaşım bilgileri.
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

export default Belgrad;
