import { useState } from 'react';
import { FormControl, OutlinedInput, Button } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import backgroundImage from '../../images/backgroundImg.png';
import styled from 'styled-components';

const SearchBackground = styled.div`
    background-image: url(${backgroundImage});
    height: 135px;
`
const Search = (props) => {
  let [value, setValue] = useState('')
  return (
    <SearchBackground imgUrl={backgroundImage}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <OutlinedInput
          id="outlined-adornment"
          value={value}
          onChange={({ target }) => setValue(target.value)}
          startAdornment={<WorkOutlineIcon color="action" />}
          endAdornment={<Button variant="contained">Search</Button>}
        />
      </FormControl>
    </SearchBackground>
  )
}

export default Search
