const API_BASE_URL = 'http://localhost:5000/api'; // Adjust URL as needed

export const quickDemo = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/quick-demo`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching quick demo:', error);
    throw error; // Re-throw to allow component to handle the error
  }
};