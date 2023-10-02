import { useGeolocation } from "../services & hooks/useGeoLocation";

function LogoGreetings() {
  const city = useGeolocation();
  const date = new Date();
  const options = {
    //hour: 'numeric',
    //minute: 'numeric',
    day: "numeric",
    month: "long", //'2-digit'
    year: "numeric",
    // weekday: 'long',//numeric, short, narrow
  };
  // const locale = navigator.language;
  // const today = new Intl.DateTimeFormat(locale, options).format(date);
  const today = new Intl.DateTimeFormat("in-ID", options).format(date);

  return (
    <div className="flex flex-col gap-2">
      <img src="/images/logo.png" alt="" className="h-auto w-28 self-center" />
      <div className="flex flex-col space-y-1">
        <p className=" text-white text-xs">{!city ? "" : `${city}`}</p>
        <p className=" text-white text-xs">{today}</p>
        <span className="text-white text-xs ">Hello Muhammad Akbar 👋 </span>
      </div>
    </div>
  );
}

export default LogoGreetings;
