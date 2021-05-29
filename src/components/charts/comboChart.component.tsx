import React from 'react'
import { Chart } from 'react-charts';
 
export function MyChart() {
  
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const series = React.useCallback(
    (s, i) => ({
      type:
        i % 4 === 0
          ? 'bubble'
          : i % 3 === 0
          ? 'line'
          : i % 2 === 0
          ? 'area'
          : 'bar'
    }),
    []
  )
 
  const axes = React.useMemo(
    () => [
      //{ primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
      { primary: true, position: 'bottom', type: 'ordinal' },
    ],
    []
  )
 
  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div >
      <Chart data={data} series={series} axes={axes} />
    </div>
  )
}