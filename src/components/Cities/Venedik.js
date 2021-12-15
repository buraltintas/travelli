import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Venedik = () => {
  const position = [45.44109833200168, 12.316153727024362];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://blog.flypgs.com/wp-content/uploads/2019/10/venedik-gezisi-icin-tavsiyeler.jpg"
          alt="Venedik view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Venedik</h1>
        <i>
          "Güzel kanallarla ayrılmış ve muhteşem köprülerle birbirine bağlanan
          117 küçük adadan oluşuyor"
        </i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Venedik hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Venedik'te gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Venedik'te yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Venedik için ulaşım bilgileri.
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

export default Venedik;
