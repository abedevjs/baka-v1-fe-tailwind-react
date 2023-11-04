import { currencyFormat, cutWords, dateFormat } from "../utilities/formatter";
import { Link } from "react-router-dom";

function Tabel({ feature, dataObj = [] }) {
  if (!dataObj.length) return null;

  let props = [];
  //   console.log(feature);
  switch (feature) {
    case "bagasi":
      props = [
        "Berangkat",
        "Dari",
        "Tujuan",
        "Sisa",
        "Harga (Kg)",
        "Status",
        "Action",
      ];
      break;

    case "bagasiHero":
      props = ["Berangkat", "Dari", "Tujuan", "Sisa", "Status"];
      break;

    case "bagasiOrderList":
      props = ["Jumlah", "Isi", "Biaya", "Catatan", "Pengirim"];
      break;

    case "order":
      props = ["Berangkat", "Dari", "Tujuan", "Berat", "Status"];
      break;

    case "orderHero":
      props = ["Berangkat", "Dari", "Tujuan", "Berat", "Status"];
      break;

    case "userBagasi":
      props = [
        "Berangkat",
        "Dari",
        "Tujuan",
        "Sisa",
        "Harga (Kg)",
        "Status",
        "Action",
      ];
      break;

    case "userOrder":
      props = [
        "Berangkat",
        "Dari",
        "Tujuan",
        "Berat",
        "Isi",
        "Biaya",
        "Status",
        "Action",
      ];
      break;

    default:
      console.log("aucune des valeurs testée n'est vraie");
      break;
  }

  // console.log(props.map((el) => console.log(el)));
  // dataObj.map((el, i) => console.log(el.waktuBerangkat));

  return (
    <div className="overflow-y-auto overflow-x-auto mb-6 shadow-md rounded-xl md:w-[45rem] sm:w-[20rem]">
      <table className="w-full max-w-none border-collapse text-sm text-left text-textColor">
        <thead className="text-xs text-gray-700 uppercase bg-secondaryYellow">
          <tr>
            {props.map((el, i) => (
              <TabelHead key={i} property={el} />
            ))}
          </tr>
        </thead>
        <tbody
          className={`${
            feature == "bagasi" ? "text-sm" : ""
          } lg:text-center sm:text-xs`}
        >
          {dataObj.map((el, i) => (
            <TabelBody
              key={i}
              feature={feature}
              id={el._id}
              berangkat={el.waktuBerangkat}
              dari={el.dari}
              tujuan={el.tujuan}
              sisa={el.availableKg}
              jumlah={el.jumlahKg}
              isi={el.isi}
              biaya={el.biayaRp}
              harga={el.hargaRp}
              netRp={el.netRp}
              catatan={el.catatan}
              owner={el.owner}
              status={el.status}
              action={el.action}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TabelHead({ property }) {
  return (
    <th scope="col" className="py-4 px-6 sm:py-2 sm:px-4">
      {property}
    </th>
  );
}

function TabelBody({
  feature,
  id,
  berangkat,
  dari,
  tujuan,
  sisa,
  jumlah,
  isi,
  biaya,
  harga,
  netRp,
  catatan,
  owner,
  status,
  action,
}) {
  return (
    <>
      {feature == "bagasi" && (
        <tr className="bg-bodyBackColor hover:bg-stone-200 duration-300">
          <td scope="row" className="px-6 py-3">
            {berangkat && dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              {dari && <img src={`/svg/${dari}.svg`} alt={dari} />}
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              {tujuan && <img src={`/svg/${tujuan}.svg`} alt={tujuan} />}
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {!sisa ? "" : String(sisa).padStart(2, "0")}{" "}
            <span className={`${!sisa ? "text-sm" : "text-xs"} italic`}>
              {sisa === 0 && "Full"}
              {sisa > 1 && "Kg"}
              {sisa === "" && ""}
            </span>
          </td>
          <td scope="row" className="px-6 py-3">
            {harga && currencyFormat(harga)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status}.svg`} alt={status} />
              <span>{status}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {status && (
              <Link
                to={`/create-order/${id}`}
                className="text-blue-600 hover:underline"
              >
                {status == "Opened" ? "BELI" : "Lihat"}
              </Link>
            )}
          </td>
        </tr>
      )}

      {feature == "bagasiHero" && (
        <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
          <td scope="row" className="px-6 py-3">
            {berangkat && dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              {dari && <img src={`/svg/${dari}.svg`} alt={dari} />}
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              {tujuan && <img src={`/svg/${tujuan}.svg`} alt={tujuan} />}
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {String(sisa).padStart(2, "0")}{" "}
            <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status}.svg`} alt={status} />
              <span>{status}</span>
            </div>
          </td>
        </tr>
      )}

      {feature == "bagasiOrderList" && (
        <tr className="bg-bodyBackColor hover:bg-stone-200 duration-300">
          <td scope="row" className="px-6 py-3">
            {jumlah > 0 && jumlah < 10 && String(jumlah).padStart(2, "0")}
            {jumlah > 10 ? jumlah : ""}{" "}
            <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            {isi}
          </td>
          <td scope="row" className="px-6 py-3">
            {currencyFormat(biaya)}
          </td>
          <td scope="row" className="px-6 py-3">
            <span className="text-xs italic">
              {!catatan ? "(Tidak ada)" : `"${cutWords(catatan, 6)}"`}
            </span>
          </td>
          <td scope="row" className="px-6 py-3">
            {cutWords(owner, 2)}
          </td>
        </tr>
      )}

      {feature == "order" && (
        <tr className="bg-bodyBackColor hover:bg-stone-200 duration-300">
          <td scope="row" className="px-6 py-3">
            {berangkat && dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {jumlah === "" && ""}
            {jumlah > 0 && jumlah < 10 && String(jumlah).padStart(2, "0")}
            {jumlah >= 10 ? jumlah : ""}{" "}
            <span className="text-xs italic">{jumlah && "Kg"}</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status}.svg`} alt={status} />
              <span>{status}</span>
            </div>
          </td>
        </tr>
      )}

      {feature == "orderHero" && (
        <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
          <td scope="row" className="px-6 py-3">
            tgl brkt bagasi
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {jumlah} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status}.svg`} alt={tujuan} />
              <span>{status}</span>
            </div>
          </td>
        </tr>
      )}

      {feature == "userBagasi" && (
        <tr className="bg-bodyBackColor hover:bg-stone-200 duration-300">
          <td scope="row" className="px-6 py-3">
            {dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {!sisa ? "" : String(sisa).padStart(2, "0")}{" "}
            <span className={`${!sisa ? "text-sm" : "text-xs"} italic`}>
              {!sisa ? "Full" : "Kg"}
            </span>
          </td>
          <td scope="row" className="px-6 py-3">
            {currencyFormat(harga)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status}.svg`} alt={status} />
              <span>{status}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <Link
              to={`/update-bagasi/${id}`}
              className="text-blue-600 hover:underline"
            >
              Edit/Hapus
            </Link>
          </td>
        </tr>
      )}

      {feature == "userOrder" && (
        <tr className="bg-bodyBackColor hover:bg-stone-200 duration-300">
          <td scope="row" className="px-6 py-3">
            {dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {jumlah} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            {isi}
          </td>
          <td scope="row" className="px-6 py-3">
            {currencyFormat(netRp)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status}.svg`} alt={status} />
              <span>{status}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <Link
              to={`/update-order/${id}`}
              className="text-blue-600 hover:underline"
            >
              Edit/Hapus
            </Link>
          </td>
        </tr>
      )}
    </>
  );
}

export default Tabel;
