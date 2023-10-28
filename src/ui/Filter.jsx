import { useSearchParams } from "react-router-dom";

const bagasiArr = [
  { value: "", label: "✈️ Semua" },
  { value: "Scheduled", label: "🔵 Scheduled" },
  { value: "Opened", label: "🟢 Opened" },
  { value: "Closed", label: "🔴 Closed" },
  { value: "Unloaded", label: "🟡 Unloaded" },
  { value: "Canceled", label: "⚫ Canceled" },
];
const orderArr = [
  { value: "", label: "🧳 Semua" },
  { value: "Preparing", label: "🔴 Preparing" },
  { value: "Ready", label: "🟢 Ready" },
  { value: "Delivered", label: "🟡 Delivered" },
  { value: "Canceled", label: "⚫ Canceled" },
];

function Filter({ type, setterStatus }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status") || "";
  function handleSelect(e) {
    searchParams.set("status", e.target.value);
    setterStatus(e.target.value);
    setSearchParams(searchParams);
  }

  const dataArr = type === "bagasi" ? bagasiArr : orderArr;

  return (
    <div className="w-full mb-2 flex items-center space-x-2 justify-center">
      <label className=" text-sm">Lihat status:</label>
      <select
        onChange={handleSelect}
        value={status}
        className="p-1 text-sm sm:text-xs bg-transparent  border-textColor outline-none"
      >
        {dataArr.map((opt, i) => (
          <option key={i} value={opt.value} className="text-left text-xs">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
