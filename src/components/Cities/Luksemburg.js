import classes from "./Cities.module.css";
import { MapContainer, TileLayer } from "react-leaflet";

const Luksemburg = () => {
  const position = [49.61161307926508, 6.13192216063771];
  return (
    <div className={classes.cityPage}>
      <div className={classes.cityHeader}>
        <img
          src="https://www.avrupa.info.tr/sites/default/files/styles/standard_page_header/public/2016-08/Luxembourg%20city%20general%20view.jpg?itok=wqUUqain"
          alt="luxembourg view"
          className={classes.img}
        />
        <h1 className={classes.cityh1}>Lüksemburg</h1>
        <i>
          "Lüksemburg şehri, bir Avrupa başkentinin sunabileceği canlı,
          kozmopolit bir atmosfer sunuyor"
        </i>
      </div>
      <div className={classes.details}>
        <details className={classes.detailsSections}>
          <summary>Genel bilgi</summary>
          <div className={classes.description}>
            Lüksemburg hakkında genel bilgiler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nereler gezilir?</summary>
          <div className={classes.description}>
            Lüksemburg'da gezilecek yerler.
          </div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Nerede yenir?</summary>
          <div className={classes.description}>Lüksemburg'da yemek yerleri</div>
        </details>
        <details className={classes.detailsSections}>
          <summary>Ulaşım</summary>
          <div className={classes.description}>
            Lüksemburg için ulaşım bilgileri.
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

export default Luksemburg;
