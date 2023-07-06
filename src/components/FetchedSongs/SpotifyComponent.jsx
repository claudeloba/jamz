import { useEffect, useState } from "react";

const SpotifyComponent = ({ setSpotifyData }) => {
  useEffect(() => {
    fetch("http://localhost:3000/spotify-token")
      .then((response) => response.json())
      .then((tokenData) => {
        return fetch("https://api.spotify.com/v1/browse/new-releases", {
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
          },
        });
      })
      .then((response) => response.json())
      .then((data) => setSpotifyData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>{/* Render the data */}</div>;
};

export default SpotifyComponent;
