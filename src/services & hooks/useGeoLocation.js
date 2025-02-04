import { useEffect, useState } from "react";

//* https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding
const geoReverseCoding_API_KEY = "AIzaSyDscFpcNCknmJRGYtzvC5Au9z01irx4gRk";

export function useGeolocation() {
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  // let lat, lng;

  useEffect(function () {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // lat = pos.coords.latitude;
        setLat(pos.coords.latitude);

        // lng = pos.coords.longitude;
        setLng(pos.coords.longitude);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  useEffect(
    function () {
      async function fetchCity() {
        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
              !lat ? 0 : lat
            },${
              !lng ? 0 : lng
            }&result_type=administrative_area_level_2&key=${geoReverseCoding_API_KEY}`
          );

          const data = await res.json();

          //administrative_area_level_1, South Sulawesi, Indonesia
          //administrative_area_level_2, Makassar City, South Sulawesi, Indonesia
          //administrative_area_level_3, Malili, East Luwu Regency, South Sulawesi, Indonesia

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
