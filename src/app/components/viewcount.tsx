import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ViewCounter() {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    async function fetchViewCount() {
      try {
        const response = await axios.post('/api/viewcount');
        if (!response) {
          throw new Error(`HTTP error! status: ${response}`);
        }
        const data = await response.data;
        setViewCount(data.count);
      } catch (error) {
        console.error('Error fetching view count:', error);
      }
    }

    fetchViewCount();
  }, []);

  return (
    <p className='text-white'>This page has been viewed {viewCount} times.</p>
  );
}
