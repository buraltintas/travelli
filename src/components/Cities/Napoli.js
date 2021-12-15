import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Napoli = () => {
  const position = [40.85202785200452, 14.269097627514334];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://cdn.wannart.com/production/post/2019/06/A4EFF77C-93C8-4F81-9F69-88F978CCD52B.jpeg"
          alt="Napoli view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Napoli</h1>
        <i>
          "Pizza ve makarnasıyla ünlü kent, yaşam tarzıyla da dikkat çekiyor"
        </i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Napoli hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>Napoli'de gezilecek yerler.</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Napoli'de yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Napoli için ulaşım bilgileri.
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

export default Napoli;
