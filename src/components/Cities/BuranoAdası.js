import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const BuranoAdası = () => {
  const position = [45.48550966060838, 12.416651704733631];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="http://bayaiyi.com/wp-content/uploads/2016/05/Burano-Adas%C4%B1-Venedik-6.jpg"
          alt="burano adası view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Burano Adası</h1>
        <i>"4 adacıktan oluşan balıkçı adası"</i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Burano Adası hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Burano Adası'nda gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>
            Burano Adası'nda yemek yerleri
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Burano Adası için ulaşım bilgileri.
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

export default BuranoAdası;
