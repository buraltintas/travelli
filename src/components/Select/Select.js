import { Link } from "react-router-dom";
import classes from "./Select.module.css";

const Select = () => {
  const places = [
    {
      image: "https://www.anadoluhayat.com.tr/img_content/batum1.jpg",
      city: "Batum",
      coordinate: [41.63271241362787, 41.61219656892736],
    },
    {
      image:
        "https://static.dezeen.com/uploads/2020/11/eixample-barcelona-aerial-view_dezeen_2364_sq.jpg",
      city: "Barcelona",
      coordinate: [41.40715830720515, 2.166498321677008],
    },
    {
      image:
        "https://i4.hurimg.com/i/hurriyet/75/1110x740/57f1ffee18c77311bc57b30a.jpg",
      city: "Amsterdam",
      coordinate: [52.37728588028861, 4.899152382209149],
    },
    {
      image:
        "https://www.avrupa.info.tr/sites/default/files/styles/standard_page_header/public/2016-08/Luxembourg%20city%20general%20view.jpg?itok=wqUUqain",
      city: "Lüksemburg",
      coordinate: [49.61161307926508, 6.13192216063771],
    },
    {
      image:
        "https://im.haberturk.com/2018/05/03/ver1552558838/2366092_bd3ccf41a6496cbc8baafbe64d060629.jpg",
      city: "Düsseldorf",
      coordinate: [51.23181949095872, 6.764552949018126],
    },
    {
      image: "https://ekoiq.com/wp-content/uploads/2018/02/maxresdefault.jpg",
      city: "Paris",
      coordinate: [48.86804433917864, 2.3482897174711184],
    },
    {
      image:
        "https://sfstatic.mncdn.com/8/00/04/16/55/bruksel-shutterstock-712426702-1570020861.jpg",
      city: "Brüksel",
      coordinate: [50.849999879808664, 4.35233648936277],
    },
    {
      image:
        "https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2021-08/brugge-hakkinda-bilinmesi-gerekenler.jpg",
      city: "Brugge",
      coordinate: [51.2142632474308, 3.2270468052396746],
    },
    {
      image:
        "https://res.cloudinary.com/turna/images/q_auto:low/v1628520024/rodos-gezi-rehberi/rodos-gezi-rehberi.webp?_i=AA",
      city: "Rodos Adası",
      coordinate: [36.438485823477805, 28.219539608155248],
    },
    {
      image:
        "https://cdn.neredekal.com/blog/BTR/760x380/sakiz-adasi-hakkinda-mutlaka-bilinmesi-gerekenler.jpg",
      city: "Sakız Adası",
      coordinate: [38.37362568843665, 26.130873649215896],
    },
    {
      image: "https://cdn.yenicaggazetesi.com.tr/news/416400.jpg",
      city: "Meis Adası",
      coordinate: [36.14975435293797, 29.592025918547908],
    },
    {
      image:
        "https://www.wts.com.tr/images/yunan-adalari/kos/kos-adasi-turlari.jpg",
      city: "Kos Adası",
      coordinate: [36.89284203073453, 27.28859084183911],
    },
    {
      image: "https://www.holidayify.com/wp-content/uploads/samos-island-1.jpg",
      city: "Samos Adası",
      coordinate: [37.76127894406907, 26.97702566031795],
    },
    {
      image:
        "https://res.cloudinary.com/turna/images/w_800,h_500/f_auto,q_auto/q_auto:low/v1538836192/Sirbistan-Belgrad_ttmklp/Sirbistan-Belgrad_ttmklp.webp?_i=AA",
      city: "Belgrad",
      coordinate: [44.87321841025922, 20.47886728738431],
    },
    {
      image:
        "https://www.turrehberin.com/wp-content/uploads/2016/07/trier-turrehberin.jpg",
      city: "Trier",
      coordinate: [49.76187052476956, 6.647887478135581],
    },
    {
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/16/dd/3e/b1/el-coliseo-de-roma.jpg",
      city: "Roma",
      coordinate: [41.89311639611272, 12.51561283166361],
    },
    {
      image:
        "https://cdn.wannart.com/production/post/2019/06/A4EFF77C-93C8-4F81-9F69-88F978CCD52B.jpeg",
      city: "Napoli",
      coordinate: [40.85202785200452, 14.269097627514334],
    },
    {
      image:
        "https://img-s2.onedio.com/id-56fd67cc43d83e643878f4a4/rev-0/w-620/f-jpg/s-905abff0a3eadc5b65dd98e9157e9328dcc33598.jpg",
      city: "Floransa",
      coordinate: [43.79912403370647, 11.265843939954808],
    },
    {
      image:
        "https://i.sozcu.com.tr/wp-content/uploads/2019/04/29/iecrop/pi2_16_9_1556527813.jpg",
      city: "Pisa",
      coordinate: [43.72480913435435, 10.396363390281639],
    },
    {
      image:
        "http://bayaiyi.com/wp-content/uploads/2016/05/Burano-Adas%C4%B1-Venedik-6.jpg",
      city: "Burano Adası",
      coordinate: [45.48550966060838, 12.416651704733631],
    },
    {
      image:
        "https://www.venicehotelcadoro.com/wp-content/uploads/2019/07/what-to-see-on-murano-island.jpg",
      city: "Murano Adası",
      coordinate: [45.459422271671045, 12.352366381137978],
    },
    {
      image:
        "https://blog.flypgs.com/wp-content/uploads/2019/10/venedik-gezisi-icin-tavsiyeler.jpg",
      city: "Venedik",
      coordinate: [45.44109833200168, 12.316153727024362],
    },
    {
      image:
        "https://italyadaegitim.com/wp-content/uploads/2020/11/SHG-MILANO-Uluslararasi-Otel-Turizm-Isletmeciligi-Okulu.jpg",
      city: "Milano",
      coordinate: [45.46776896988199, 9.191120148752002],
    },
    {
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/15/e5/fd/18/caption.jpg",
      city: "Montecatini",
      coordinate: [43.88364891405828, 10.772746136680517],
    },
    {
      image:
        "https://i4.hurimg.com/i/hurriyet/75/1110x740/59e9f80467b0a918d871aff7.jpg",
      city: "Siena",
      coordinate: [43.324961981766094, 11.329276298978716],
    },
    {
      image:
        "https://gezicenga.com/wp-content/uploads/2020/02/san-gimignano-gezilecek-yerler.jpg",
      city: "San Gimignano",
      coordinate: [43.469473955183446, 11.043254894390383],
    },
  ];

  return (
    <div>
      <div>
        <h1>
          Nereyi <span className={classes.spin}></span>
        </h1>
      </div>
      <div className={classes.cities}>
        {places.map((city) => (
          <ul
            key={city.city}
            style={{
              backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5) ), url(${city.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <img src={city.image} alt="" /> */}
            <li>
              <Link to={city.city}>{city.city}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Select;
