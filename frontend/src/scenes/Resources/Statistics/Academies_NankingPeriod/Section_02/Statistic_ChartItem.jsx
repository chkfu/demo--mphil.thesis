// from package
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
// from package
import { useSelector } from 'react-redux';
// from file
import { theme } from './ChartStyleSetting';
import { BarItemColorMatcher } from './BarItemColorMatcher';


// rendering 

function Statistic_ChartBox({ data }) {

  // redux
  const filterChoice = useSelector(state => state.resource.filterChoice);

  return (
    <ResponsiveBar
      theme={ theme }
      data={ data.data.data.details.filter((item) => (item[filterChoice] > 0)) }
      keys={ [filterChoice] }
      indexBy="nameEng"
      margin={ { top: 50, right: 200, bottom: 150, left: 200 } }
      padding={ 0.3 }
      groupMode="grouped"
      valueScale={ { type: 'linear' } }
      indexScale={ { type: 'band', round: true } }
      colors={ BarItemColorMatcher(filterChoice) }
      borderColor={ {
        from: 'color',
        modifiers: [['darker', '2']]
      } }
      axisTop={ null }
      axisRight={ null }
      axisBottom={ {
        tickSize: 4,
        tickPadding: 3,
        tickRotation: -50,
        legend: 'Region',
        legendPosition: 'middle',
        legendOffset: 100
      } }
      axisLeft={ {
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      } }
      labelSkipWidth={ 20 }
      labelSkipHeight={ 10 }
      labelTextColor={ {
        from: 'color',
        modifiers: [['darker', 2]]
      } }
      role="application"
    />
  );
}

export default Statistic_ChartBox;
