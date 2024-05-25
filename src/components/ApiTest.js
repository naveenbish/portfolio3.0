import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiTest = () => {
  const [logoData, setLogoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://13.201.55.203:3000/add-logo');
        setLogoData(response.data);
        console.log(logoData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Logosdasd Data</h2>
        <div>
            {/* <p>{logoData[0]._id} hola</p> */}
        </div>
    </div>
  );
};

export default ApiTest;
