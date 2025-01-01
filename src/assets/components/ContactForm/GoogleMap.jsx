import React, { useEffect, useState } from "react";

const GoogleMap = ({ setFormData }) => {
  const [location, setLocation] = useState({
    latitude: 15.81441135731113,
    longitude: 74.48864107023633,
  });
  const [error, setError] = useState(null);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    // Set initial location name on component load
    handleConvert(location);
  }, [location]);

  // Handle converting lat/lon to address using OpenStreetMap
  const handleConvert = async (location) => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.latitude}&lon=${location.longitude}&format=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.display_name) {
        setLocationName(data.display_name);
        setFormData((prev) => ({ ...prev, location: data.display_name }));
      } else {
        setLocationName("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setLocationName("Error occurred");
    }
  };

  // Get the user's current location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          setError(null);
          handleConvert({ latitude, longitude }); // Fetch and update location name
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const zoomLevel = 17; // Zoom level for the map
  const mapSrc = `https://maps.google.com/maps?q=${location.latitude},${location.longitude}&z=${zoomLevel}&output=embed`;

  return (
    <div>
      <div style={{ width: "60vw", height: "60vh" }}>
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          src={mapSrc}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div>
        <button
          onClick={getLocation}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Get Location
        </button>
      </div>
    </div>
  );
};

export default GoogleMap;
