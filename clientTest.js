import axios from 'axios';
const API_URL = 'http://localhost:8000/api/nodes/1'; 

const dataBuffer = [];

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString(); 
};

const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);

    if (response.data) {
      const formattedData = {
        updatedAt: formatTimestamp(response.data.updatedAt),
        temperature: response.data.temperature,
        humidity: response.data.humidity,
        windspeed: response.data.windspeed,
        rainfall: response.data.rainfall,
        latitude: response.data.latitude,
        longitude: response.data.longitude,
      };

      dataBuffer.push(formattedData);

      if (dataBuffer.length > 50) {
        dataBuffer.shift(); 
      }

      console.log('Received Data:', formattedData);
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

setInterval(fetchData, 1000); // Fetch data every 10 seconds (for example)
