import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const GensetChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
    datasets:[
      {
        data: [null, 12.27,12.286, 12.278, 12.29,12.27,12.31,12.31,12.31,12.25,12.27,12.279,12.281,12.3],
        backgroundColor: '#0A1517',
        borderColor: '#C37C5A',
        pointBorderColor: 'transparent',
        // pointBorderWidth: 4,
        pointRadius:0,
        tension: 0,
      }
    ]
  };

  const options = {
    plugins:{
      legend: false,
    },
    layout:{
      padding:{
        // top:90,
        // right:10,
        // bottom:110,
        // left:10
        
      },
    
    },
    maintainAspectRatio: false, // Set maintainAspectRatio to false
    aspectRatio: undefined, // Set aspectRatio to NaN
    height: 220, // Set the height of the chart
    scales:{
      x:{
        min: false, // Adjusted min value to add space from origin
        max: 13.5,
        grid:{
          display: false
        },
        ticks: {
          color: '#DDD', // Custom label color
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: 10.323,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          suggestedMin: 1, // Hide the zero label
        }
      },
      y:{
        min: 12.24,
        max: 12.34, // Adjust the maximum value to make the y-axis shorter
        ticks:{
          stepSize: 0.02,
          display: true,
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: 10.323,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          color:"#FFF"
        },
        grid:{
          display: true,
          color: '#58595B'
        }
      }
    }
  };

  return (
    <div style={{
      width: '100%', // Adjusted width to 100%
      height: '220px', // Adjusted height to 100%
    }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default GensetChart;
