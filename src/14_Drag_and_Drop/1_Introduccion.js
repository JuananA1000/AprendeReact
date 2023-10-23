import { useState } from 'react';
import text from '../translations/es/global.json';

// Componentes
import { H1t14 } from '../components/Headers/Headers';
import User from './components/User';

// @dnd-kit/core
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

// Imágenes
import koki from '../images/t14/koki.png';
import landa from '../images/t14/landa.png';
import albert from '../images/t14/albert.png';
import juanan from '../images/t14/juanan.png';
import walter from '../images/t14/walter.png';
import usurero12 from '../images/t14/usurero12.png';

// TUTORIAL: https://youtu.be/swFjfjLXe3I?si=3gfVwwLfHyVx8IsB

export default function Introduccion() {
  const estadoInicial = [
    { id: 1, name: 'JuANAN', img: juanan },
    { id: 2, name: 'Koki', img: koki },
    { id: 3, name: 'Junior', img: koki },
    { id: 4, name: 'Walter', img: walter },
    { id: 5, name: 'Landa', img: landa },
    { id: 6, name: 'Albert', img: albert },
    { id: 12, name: 'Usurero12', img: usurero12 },
  ];

  const [parqueEvropa, setParqueEvropa] = useState(estadoInicial);

  const handleDragEnd = (event) => {
    console.log('Estado INICIAL del array: ', parqueEvropa);

    const { active, over } = event;

    console.log('Active ID: ', active.id);
    console.log('Over ID: ', over.id);

    const oldIndex = parqueEvropa.findIndex((person) => person.id === active.id);
    const newIndex = parqueEvropa.findIndex((person) => person.id === over.id);

    console.log('Old index: ', oldIndex);
    console.log('New index: ', newIndex);

    const finalparqueEvropa = arrayMove(parqueEvropa, oldIndex, newIndex);
    setParqueEvropa(finalparqueEvropa);

    console.log('Estado FINAL del array: ', finalparqueEvropa);
  };

  return (
    <div>
      <H1t14 />
      <h2>{text['dnd-page-intro']}</h2>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '40%', marginTop: '20px' }}>
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={parqueEvropa} strategy={verticalListSortingStrategy}>
              {parqueEvropa.map((user) => (
                <User user={user} key={user.id} />
              ))}
            </SortableContext>
          </DndContext>
        </div>

        <div style={{ paddingLeft: 40 }}>
          <button onClick={() => setParqueEvropa(estadoInicial)}>{text['dnd-page-intro-reset']}</button>
        </div>
      </div>
    </div>
  );
}
