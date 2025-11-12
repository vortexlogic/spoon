import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';

function Dashboard() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}: {item.value}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;