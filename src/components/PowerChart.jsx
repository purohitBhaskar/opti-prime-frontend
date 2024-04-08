import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const PowerChart = () => {
  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets:[
      {
        data: [4, 7.8, 6, 8, 7, 5, 6, 6, 8, 7, 5, 6],
        backgroundColor: 'transparent',
        borderColor: '#19988B',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        tension: 0.4,
      }
    ]
  };

  const options = {
    plugins:{
      legend: false,
    },
    layout:{
      padding:{
        top:90,
        right:10,
        bottom:110,
        left:10
      }
    },
    scales:{
      x:{
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
          lineHeight: 'normal'
        }
      },
      y:{
        min: 3,
        max: 8, // Adjust the maximum value to make the y-axis shorter
        ticks:{
          stepSize: 1,
          display: false
        },
        
        grid:{
          display: false
        }
      }
    }
  };

  return (
    <div style={{
      width: '830px',
      height: '247px',
    }}>
      <Line data={data} options={options}/>
    </div>
  );
};

export default PowerChart;
