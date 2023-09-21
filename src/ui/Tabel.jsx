import { currencyFormat, dateFormat } from "../utilities/formatter";
import { Link } from "react-router-dom";

function Tabel({ feature, dataObj }) {
  if (dataObj.length == 0) return null;

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
      props = ["Berangkat", "Dari", "Tujuan", "Berat", "Status", "Action"];
      break;

    default:
      console.log("aucune des valeurs testée n'est vraie");
      break;
  }

  //   console.log(props.map((el) => console.log(el)));

  return (
    <div className="overflow-y-auto overflow-x-auto mb-7 shadow-md rounded-xl md:w-[45rem] sm:w-[20rem]">
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
              id={el.id}
              berangkat={el.berangkat}
              dari={el.dari}
              tujuan={el.tujuan}
              sisa={el.sisa}
              total={el.total}
              harga={el.harga}
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
  total,
  harga,
  status,
  action,
}) {
  return (
    <>
      {feature == "bagasi" && (
        <tr className="bg-bodyBackColor hover:bg-stone-200 duration-300">
          <td scope="row" className="px-6 py-3">
            {dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {sisa} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            {currencyFormat(harga)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt={status} />
              <span>{status}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <Link
              to={`/create-order/${id}`}
              className="text-blue-600 hover:underline"
            >
              {status == "Opened" ? "BELI" : "Lihat"}
            </Link>
          </td>
        </tr>
      )}

      {feature == "bagasiHero" && (
        <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
          <td scope="row" className="px-6 py-3">
            {dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {sisa} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt={status} />
              <span>{status}</span>
            </div>
          </td>
        </tr>
      )}

      {feature == "order" && (
        <tr className="bg-bodyBackColor hover:bg-stone-200 duration-300">
          <td scope="row" className="px-6 py-3">
            {dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {total} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt={status} />
              <span>{status}</span>
            </div>
          </td>
        </tr>
      )}

      {feature == "orderHero" && (
        <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
          <td scope="row" className="px-6 py-3">
            {dateFormat(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {total} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt={tujuan} />
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
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {sisa} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            {currencyFormat(harga)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt={status} />
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
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt={dari} />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt={tujuan} />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {total} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt={status} />
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
