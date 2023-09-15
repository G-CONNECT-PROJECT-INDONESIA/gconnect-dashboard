const data = {
    timestamps: [],
    imuRoll: [],
    imuPitch: [],
    batteryStatus: [],
  };
  
  const MAX_BUFFER_SIZE = 50;
  
  const updateData = (newData) => {
    data.timestamps.push(newData.timestamp);
    data.imuRoll.push(newData.imuRoll);
    data.imuPitch.push(newData.imuPitch);
    data.batteryStatus.push(newData.batteryStatus);
  
    if (data.timestamps.length > MAX_BUFFER_SIZE) {
      data.timestamps.shift();
      data.imuRoll.shift();
      data.imuPitch.shift();
      data.batteryStatus.shift();
    }
  };
  
  const getData = () => {
    return {
      timestamps: data.timestamps,
      imuRoll: data.imuRoll,
      imuPitch: data.imuPitch,
      batteryStatus: data.batteryStatus,
    };
  };
  
  export { updateData, getData };
  