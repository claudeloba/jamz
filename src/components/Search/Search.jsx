import { IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Search = ({onChange}) => {
  return ( <form>
    <TextField
      id="search-bar"
      className="text"
      onChange={onChange}
      label="Search songs"
      variant="outlined"
      placeholder="Search..."
      size="small"
      
      sx={{
        color: "secondary.main"
      }}
    />
    <IconButton type="submit" aria-label="search" sx={{}}>
      <SearchIcon />
    </IconButton>
  </form> );
}
 
export default Search;