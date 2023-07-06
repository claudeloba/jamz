import { Box, Typography } from "@mui/material";
import SongCard from "../SongCard/SongCard";
import Search from "../Search/Search";
import { useState } from "react";

const FetchedSongs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = ({ target }) => {
    setSearchQuery(target.value);
  };

  return (
    <Box
      sx={{ bgcolor: "bg.main", p: "2rem", borderRadius: "1rem", my: "1rem" }}
    >
      <Search onChange={handleSearch} />

      <SongCard searchQuery={searchQuery} title="Song name" />
    </Box>
  );
};

export default FetchedSongs;
