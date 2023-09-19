import { useEffect, useState } from "react";

const geoReverseCoding_API_KEY = "AIzaSyDscFpcNCknmJRGYtzvC5Au9z01irx4gRk";

export function useGeolocation() {
  const [location, setLocation] = useState("");

  let lat, lng;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      lat = pos.coords.latitude;
      lng = pos.coords.longitude;
    },
    (err) => {
      console.log(err);
    }
  );

  useEffect(
    function () {
      async function fetchCity() {
        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
              !lat ? 0 : lat
            },${
              !lng ? 0 : lng
            }&result_type=administrative_area_level_1&key=${geoReverseCoding_API_KEY}`
          );

          const data = await res.json();

          if (data.status !== "OK") return;
          setLocation(data.results[0].formatted_address);
        } catch (error) {
          console.log(error);
        }
      }

      fetchCity();
    },
    [lat, lng]
  );

  return location;
}
