import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getMapDataByCountryId } from '../../api'
import HighMaps from '../Charts/HighMaps'
import LineChart from '../Charts/LineChart'

export default function Summary({ report, selectedCountryId }) {
  const [mapData, setMapData] = useState({})

  useEffect(() => {
    if (selectedCountryId) {
      getMapDataByCountryId(selectedCountryId)
        .then((res) => {
          setMapData(res)
        })
        .catch((err) => console.log({ err }))
    }
  }, [selectedCountryId])

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sx={8} xs={8}>
          <LineChart data={report} />
        </Grid>
        <Grid item sm={4} xs={4}>
          <HighMaps mapData={mapData}></HighMaps>
        </Grid>
      </Grid>
    </>
  )
}
