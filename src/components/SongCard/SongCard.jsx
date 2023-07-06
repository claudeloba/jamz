import { Paper, Typography } from "@mui/material";

const SongCard = ({ data, searchQuery }) => {
  let albumElements = null;

  if (data) {
    const filteredAlbums = data.albums.items.filter((album) =>
      album.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    albumElements = filteredAlbums.map((album, index) => (
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
        <Typography variant="h4">{album.name}</Typography>
        <Typography>Artist: {album.artists[0].name}</Typography>
        <Typography>Release Date: {album.release_date}</Typography>
      </Paper>
    ));
  }

  return <div>{albumElements}</div>;
};

export default SongCard;
