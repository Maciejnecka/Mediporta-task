import { useState, useEffect } from 'react';
import axios from 'axios';

const useTags = (page, pageSize, sortField = 'popular', sortOrder = 'desc') => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await axios.get(
          `https://api.stackexchange.com/2.2/tags?site=stackoverflow&order=desc&sort=popular&page=${page}&pagesize=${pageSize}&key=Qapmp7A0C9E4csyqdryPaw((`
        );

        setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, pageSize, sortField, sortOrder]);

  return { data, isLoading, error };
};

export default useTags;
