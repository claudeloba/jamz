import { Paper, Typography } from "@mui/material";
import useFetch from "../../hooks/useFetch";

const SongCard = ({ title = "song", searchQuery }) => {
  const { data, pending, error } = useFetch("../../db/db.json");

  let songElements = null;

  if (data) {
    const filteredSongs = data.songs.filter((song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    songElements = filteredSongs.map((song, index) => (
      <Paper
        key={index}
        elevation={4}
        sx={{
          bgcolor: "secondary.main",
          minHeight: "8rem",
          my: "2rem",
          p: "1.5rem",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <Typography variant="h4">{song.title}</Typography>
        <Typography>Artist: {song.artist}</Typography>
        <Typography>Album: {song.album}</Typography>
      </Paper>
    ));
  }

  return (
    <div>
      {pending && <Typography>Loading...</Typography>}
      {songElements}
      {error && <Typography>Error: Could not reach the server</Typography>}
    </div>
  );
};

export default SongCard;
