import { Box } from "@mui/material";
import FetchedSongs from "../components/FetchedSongs/FetchedSongs";
import Playlist from "../components/Playlist/Playlist";

const Songs = () => {
  return ( 
    <Box sx={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5}}>
      <FetchedSongs />
      <Playlist />
    </Box>
   );
}
 
export default Songs;