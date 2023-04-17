import React, { useState, useEffect } from "react";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);

  useEffect(() => {
    async function initMap() {
      const { Map, places } = await window.google.maps.importLibrary("maps");

      const map = new Map(document.getElementById("map"), {
        center: { lat: 39.9612, lng: -82.9988 }, // Default center (Columbus, Ohio)
        zoom: 8,
      });

      // Create a search box and link it to the UI element.
      const input = document.getElementById("search-box");
      const searchBox = new places.SearchBox(input);

      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
          return;
        }

        // For each place, get the icon, name and location.
        const bounds = new window.google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          // Set the map's center to the selected place's location
          map.setCenter(place.geometry.location);

          bounds.extend(place.geometry.location);
        });

        map.fitBounds(bounds);
      });

      setMap(map);
      setSearchBox(searchBox);
    }

    // Load the Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCxwtaB1kLUk-xzEnYu-YTaZ-lQu57BfWI&libraries=geometry,places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initMap();
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <input
        id="search-box"
        type="text"
        placeholder="Search for a location"
        style={{ width: "100%" }}
      />
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};

export default MapComponent;
