import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function User({ user }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    // useSortable tiene una propiedad 'id' la cual podemos utilizar para ordenar nuestras listas
    id: user.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,

    // Estilos en línea
    color: '#1E5F08',
    background: 'linear-gradient(180deg, #4ed61e 0%, #688800 99.99%, rgba(57, 82, 48, 0) 100%)',
    padding: '23px',
    borderRadius: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  return (
    <div {...attributes} {...listeners} ref={setNodeRef} style={style}>
      <h3>{user.name}</h3>
      <div style={{ backgroundColor: '#1E5F08', padding: 11, borderRadius: '10px' }}>
        <h2>{user.id}</h2>
      </div>
      <img src={user.img} width={50} />
    </div>
  );
}
