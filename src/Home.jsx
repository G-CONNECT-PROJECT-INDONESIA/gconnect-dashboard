import React, { useEffect, useState } from 'react';
import fetchData from './api'; // Import the fetchData function from api.js
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

function Home() {
  const [dataBuffer, setDataBuffer] = useState([]);

  useEffect(() => {
    const fetchDataInterval = setInterval(async () => {
      try {
        const formattedData = await fetchData();

        if (formattedData) {
          // Update dataBuffer with the new data
          setDataBuffer((prevData) => {
            const updatedData = [...prevData, formattedData];

            if (updatedData.length > 50) {
              // Remove the oldest data point if there are more than 50 data points
              updatedData.shift();
            }

            return updatedData;
          });

          console.log('Received Data:', formattedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }, 10000); // Fetch data every 10 seconds

    return () => {
      clearInterval(fetchDataInterval); // Clear the interval when the component unmounts
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>IMU ROLL</h3>
            <BsFillArchiveFill className="card_icon" />
          </div>
          <h1>{dataBuffer.length > 0 ? dataBuffer[dataBuffer.length - 1].temperature : ''}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>TEST2</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{dataBuffer.length > 0 ? dataBuffer[dataBuffer.length - 1].humidity : ''}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>TEST3</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>{dataBuffer.length > 0 ? dataBuffer[dataBuffer.length - 1].windspeed : ''}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>{dataBuffer.length > 0 ? dataBuffer[dataBuffer.length - 1].rainfall : ''}</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={dataBuffer}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="updatedAt" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#FF5733" name="Temperature" />
            <Line type="monotone" dataKey="humidity" stroke="#33FF57" name="Humidity" />
            <Line type="monotone" dataKey="windspeed" stroke="#5733FF" name="Windspeed" />
            <Line type="monotone" dataKey="rainfall" stroke="#33A1FF" name="Rainfall" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
