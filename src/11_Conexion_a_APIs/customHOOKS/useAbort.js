import { useState, useEffect } from 'react';

export default function useAbort(url) {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    setCargando(true);

    fetch(url, { signal: abortController.signal })
      .then((respuesta) => respuesta.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Se ha cancelado la peticion');
        } else {
          setError(error);
        }
      })
      .finally(() => setCargando(false));
    return () => abortController.abort();
  }, []);

  const abortarPeticion = () => {
    if (controller) {
      controller.abort();
      setError('Se ha cancelado la peticion');
    }
  };

  return { data, cargando, error, abortarPeticion };
}
