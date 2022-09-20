import { useState } from 'react';
import { FormControl, OutlinedInput, Button } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import backgroundImage from '../../images/backgroundImg.png';
import styled from 'styled-components';
import './style.css'
const SearchBackground = styled.div`
    background-image: url(${backgroundImage});
    height: 135px;
    margin: 0 auto;
    width: 90%;
    border-radius: 10px;
    padding: 0 30px;
    position: relative;
`
const Search = (props) => {
  let [value, setValue] = useState('')
  return (
    <SearchBackground imgUrl={backgroundImage} className="SearchContainer">
      <FormControl fullWidth sx={{ m: 1 }}>
        <OutlinedInput
          id="outlined-adornment"
          value={value}
          placeholder="Titles, companies, expertise, or benefits"
          onChange={({ target }) => setValue(target.value)}
          startAdornment={<WorkOutlineIcon color="action" />}
          endAdornment={<Button variant="contained">Search</Button>}
        />
      </FormControl>
    </SearchBackground>
  )
}

export default Search
