import { kotaAsal, kotaTujuan } from "../../public/docs/kota";
import isiKiriman from "../../public/docs/isiKiriman";

function Option({ feature, className }) {
  const data =
    feature == "kota-asal"
      ? kotaAsal
      : feature == "kota-tujuan"
      ? kotaTujuan
      : feature == "isi-kiriman"
      ? isiKiriman
      : [];

  return data.map((el, i) => (
    <option key={i} className={className} value={el.value}>
      {el.label}
    </option>
  ));
}

export default Option;
