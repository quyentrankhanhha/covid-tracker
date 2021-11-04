import '@fontsource/roboto'
import { Box, Container, Typography } from '@material-ui/core'
import { sortBy } from 'lodash'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { getCountries, getReportByCountry } from './api'
import CountrySelector from './components/CountrySelector'
import Highlight from './components/Highlight'
import Summary from './components/Summary'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountryId, setSelectedCountryId] = useState('')
  const [report, setReport] = useState([])

  useEffect(() => {
    getCountries().then((res) => {
      const countries = sortBy(res.data, 'Country')
      setCountries(countries)
      setSelectedCountryId('fi')
    })
  }, [])

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value)
  }

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      )

      getReportByCountry(selectedCountry?.Slug)?.then((res) => {
        // delete the lastest item in array because sometimes it is wrong
        res.data.pop()
        setReport(res.data)
      })
    }
  }, [countries, selectedCountryId])
  return (
    <Container>
      <Box style={{ margin: '20px 0' }}>
        <Typography variant='h2'>COVID-19 CORONAVIRUS PANDEMIC</Typography>
        <Typography>{moment().format('LLL')}</Typography>
      </Box>
      <Box style={{ textAlign: 'center', margin: '40px 0' }}>
        <CountrySelector
          countries={countries}
          handleOnChange={handleOnChange}
          value={selectedCountryId}
        />
      </Box>

      <Highlight report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId} />
    </Container>
  )
}

export default App
