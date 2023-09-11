function getSuspender(promesa) {
  let estado = 'pendiente';
  let respuesta;

  const suspender = promesa.then(
    (res) => {
      estado = 'éxito';
      respuesta = res;
    },
    (err) => {
      estado = 'error';
      respuesta = err;
    }
  );

  const read = () => {
    switch (estado) {
      case 'pending':
        throw suspender;
      case 'error':
        throw respuesta;
      default:
        return respuesta;
    }
  };
  return { read };
}

export default function fetchData(url) {
  const promesa = fetch(url)
    .then((respuesta) => respuesta.json())
    .then((data) => data);

  return getSuspender(promesa);
}
