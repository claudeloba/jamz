import { Box } from "@mui/material";
import SongCard from "../SongCard/SongCard";
import Search from "../Search/Search";
import { useState } from "react";
import SpotifyComponent from "./SpotifyComponent";

const FetchedSongs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [spotifyData, setSpotifyData] = useState(null);

  const handleSearch = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <Box
      sx={{ bgcolor: "bg.main", p: "2rem", borderRadius: "1rem", my: "1rem" }}
    >
      <SpotifyComponent setSpotifyData={setSpotifyData} />
      <Search onChange={handleSearch} />

      <SongCard
        data={spotifyData}
        searchQuery={searchQuery}
        title="Song name"
      />
    </Box>
  );
};

export default FetchedSongs;
