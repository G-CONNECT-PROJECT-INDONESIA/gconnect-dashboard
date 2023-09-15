// import axios from 'axios';

// const API_URL = 'http://localhost:8000/api/nodes/1';

// const formatTimestamp = (timestamp) => {
//   const date = new Date(timestamp);
//   return date.toLocaleTimeString();
// };

// const fetchData = async () => {
//   try {
//     const response = await axios.get(API_URL);

//     if (response.data) {
//       const formattedData = {
//         updatedAt: formatTimestamp(response.data.updatedAt),
//         temperature: response.data.temperature,
//         humidity: response.data.humidity,
//         windspeed: response.data.windspeed,
//         rainfall: response.data.rainfall,
//         latitude: response.data.latitude,
//         longitude: response.data.longitude,
//       };

//       return formattedData;
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     throw error;
//   }
// };

// export default fetchData;


import axios from 'axios';

const API_URL = 'http://localhost:8000/api/nodes/1';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);

    if (response.data) {
      return {
        updatedAt: new Date(response.data.updatedAt).toLocaleTimeString(),
        temperature: response.data.temperature,
        humidity: response.data.humidity,
        windspeed: response.data.windspeed,
        rainfall: response.data.rainfall,
        latitude: response.data.latitude,
        longitude: response.data.longitude,
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

export default fetchData;
