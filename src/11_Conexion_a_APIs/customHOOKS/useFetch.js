import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => setData(data));
  }, []);

  return { data };
}
