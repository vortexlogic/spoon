import React, { useState } from 'react';
import { quickDemo } from '../services/api';

const QuickDemoButton = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await quickDemo();
      setResult(data.result);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Loading...' : 'Run Quick Demo'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default QuickDemoButton;