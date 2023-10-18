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
  };

  return (
    <div {...attributes} {...listeners} ref={setNodeRef} style={style}>
      <h3
        style={{
          background: 'linear-gradient(180deg, #4ed61e 0%, #688800 99.99%, rgba(57, 82, 48, 0) 100%)',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '10px',
          color: '#1E5F08',
        }}>
        {user.name}
      </h3>
    </div>
  );
}
