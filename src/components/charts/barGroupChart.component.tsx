import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";


export type chartDataItem = {
    name: string,
    value: {
      name: string,
      value: number,
      type: 'bar' | 'line'
    }[]
  }

export const BarGroupChartComponente: React.FC<{data: chartDataItem[]}> = (props) => {

  const [options, setOptions] = useState({} as  ApexOptions); 
  
  useEffect(() => {
    setOptions({
      chart: {
        height: 350,
        type: "line",
        toolbar: { show: false }
      },
      stroke: { show: true, width: [0, 0, 3] },
      plotOptions: {bar: { columnWidth: '40' }},
      xaxis: {
        categories: props.data.keys()
      },
      yaxis: [
          {
            seriesName: 'Column A',
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
            }
          },
          {
            seriesName: 'Column A',
            show: false
          }, {
            opposite: true,
            seriesName: 'Line C',
            show: false,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
            },
            title: {
              text: "Line"
            }
          }
        ],
      
    })
  }, [])

  const  series = [
    {
      name: "Estimado",
      type: 'column',
      data: [58, 52, 45, 50, 49, 60, 64, 61, 58, 52, 45, 50]
    },
    {
      name: "Real",
      type: 'column',
      data: [30, 40, 41, 52, 47, 56, 59, 58, 41, 52, 47, 56]
    },
    {
      name: "",
      type: 'line',
      data: [30, 40, 41, 52, 47, 56, 59, 58, 41, 52, 47, 56]
    }
  ]


  return (
    <div >
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            //type="line"
            width="100%"
            height='300'
          />
        </div>
      </div>
    </div>
  );
}