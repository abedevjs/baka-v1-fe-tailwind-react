import { kotaAsal, kotaTujuan } from "../../public/docs/kota";
import isiKiriman from "../../public/docs/isiKiriman";
import namaBank from "../../public/docs/namaBank";

function Option({ feature, className }) {
  let data = [];
  switch (feature) {
    case "kota-asal":
      data = kotaAsal;
      break;
    case "kota-tujuan":
      data = kotaTujuan;
      break;
    case "isi-kiriman":
      data = isiKiriman;
      break;
    case "nama-bank":
      data = namaBank;
      break;

    default:
      console.log("aucune des valeurs á `Option UI' testée n'est vraie");
      break;
  }

  return data.map((el, i) => (
    <option key={i} className={className} value={el.value}>
      {el.label}
    </option>
  ));
}

export default Option;
