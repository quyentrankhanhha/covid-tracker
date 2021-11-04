import { Grid } from '@material-ui/core'
import React from 'react'
import HighlightCard from './HighlightCard'

export default function Highlight({ report }) {
  const data = report && report.length ? report[report.length - 1] : []
  const summary = [
    {
      title: 'Total Cases',
      count: data.Confirmed,
      type: 'confirmed',
    },
    {
      title: 'Recovered',
      count: data.Recovered,
      type: 'recovered',
    },
    {
      title: 'Deaths',
      count: data.Deaths,
      type: 'death',
    },
  ]
  return (
    <Grid container direction='row' alignItems='center' spacing={3}>
      {summary?.map((item, index) => (
        <Grid item xs={4}>
          <HighlightCard
            key={index}
            title={item.title}
            count={item.count}
            type={item.type}
          />
        </Grid>
      ))}
    </Grid>
  )
}
