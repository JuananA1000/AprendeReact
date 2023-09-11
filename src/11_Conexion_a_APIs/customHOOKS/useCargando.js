import { useState, useEffect } from 'react';

export default function useCargando(url) {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setCargando(true);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setCargando(false));
  }, []);

  return { data, cargando, error };
}
