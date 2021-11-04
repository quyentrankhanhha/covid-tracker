import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from '@material-ui/core'
import React from 'react'

export default function CountrySelector({ value, handleOnChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor='' shrink>
        Country
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: 'country',
          id: 'country-selector',
        }}
      >
        {countries?.map((country, index) => {
          return (
            <option value={country.ISO2.toLowerCase()} key={`country-${index}`}>
              {country.Country}
            </option>
          )
        })}
      </NativeSelect>

      <FormHelperText>Choose other country</FormHelperText>
    </FormControl>
  )
}
