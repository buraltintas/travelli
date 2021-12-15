import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Milano = () => {
  const position = [45.46776896988199, 9.191120148752002];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://italyadaegitim.com/wp-content/uploads/2020/11/SHG-MILANO-Uluslararasi-Otel-Turizm-Isletmeciligi-Okulu.jpg"
          alt="Milano view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Milano</h1>
        <i>
          "Hem tarihi hem de modern dünyayı birarada soluyabileceğiniz bir yaşam
          tarzı"
        </i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Milano hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>Milano'da gezilecek yerler.</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Milano'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Milano için ulaşım bilgileri.
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

export default Milano;
