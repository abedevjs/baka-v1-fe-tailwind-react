import { dateFormatter } from "../utilities/formatter";

function Tabel({ feature, dataObj }) {
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
            {dateFormatter(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt="Jakarta" />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt="Cairo" />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {sisa} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            Rp. {harga}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt="Scheduled" />
              <span>{status}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <a href="orderForm.html" className="text-blue-600 hover:underline">
              {action}
            </a>
          </td>
        </tr>
      )}

      {feature == "bagasiHero" && (
        <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
          <td scope="row" className="px-6 py-3">
            {dateFormatter(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt="Jakarta" />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt="Cairo" />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {sisa} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt="Scheduled" />
              <span>{status}</span>
            </div>
          </td>
        </tr>
      )}

      {feature == "order" && (
        <tr className="bg-bodyBackColor hover:bg-stone-200 duration-300">
          <td scope="row" className="px-6 py-3">
            {berangkat}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt="Jakarta" />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt="Cairo" />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {total} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt="Preparing" />
              <span>{status}</span>
            </div>
          </td>
        </tr>
      )}

      {feature == "orderHero" && (
        <tr className="bg-bodyBackColor hover:opacity-90 duration-300">
          <td scope="row" className="px-6 py-3">
            {dateFormatter(berangkat)}
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${dari.toLowerCase()}.svg`} alt="Jakarta" />
              <span>{dari}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${tujuan.toLowerCase()}.svg`} alt="Cairo" />
              <span>{tujuan}</span>
            </div>
          </td>
          <td scope="row" className="px-6 py-3">
            {total} <span className="text-xs italic">Kg</span>
          </td>
          <td scope="row" className="px-6 py-3">
            <div className="flex justify-left space-x-2">
              <img src={`/svg/${status.toLowerCase()}.svg`} alt="Preparing" />
              <span>{status}</span>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default Tabel;
