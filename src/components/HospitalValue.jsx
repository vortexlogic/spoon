import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you have axios installed: npm install axios

const HospitalValue = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('/api/hospital-value'); // Backend endpoint
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading hospital value data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div>
      <h1>Why Hospitals Matter</h1>
      <h2>{data.headline}</h2>
      <p>{data.description}</p>
      <h3>Key Benefits:</h3>
      <ul>
        {data.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <p><em>Source: {data.source}</em></p>
    </div>
  );
};

export default HospitalValue;