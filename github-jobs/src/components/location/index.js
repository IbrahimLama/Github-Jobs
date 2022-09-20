import { useState } from 'react'
import { FormControl, OutlinedInput, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import styled from 'styled-components'

const LocationHeader = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  color: #B9BDCF;
  margin-bottom: 14px;
`

const CustomFormControlLabel = styled(FormControlLabel)`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #334680;
`

const Location = (props) => {
  let [value, setValue] = useState('');
  const countries = ['London', 'Amesterdam', 'New York', 'Berlin']

  return (
    <>
      <LocationHeader>Location</LocationHeader>
      <FormControl fullWidth sx={{ m: 1 }}>
        <OutlinedInput
          id="outlined-adornment"
          value={value}
          placeholder="City, state, zip code, or country"
          onChange={({ target }) => setValue(target.value)}
          startAdornment={<PublicIcon color="action" />}
        />
      </FormControl>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group">
          {countries?.map((country, index) => {
            return <CustomFormControlLabel
              value={country}
              control={<Radio />}
              label={country}
              key={`country-${index}`}
            />
          })}
        </RadioGroup>
      </FormControl>
    </>
  )
}

export default Location
