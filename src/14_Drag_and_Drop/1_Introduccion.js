import { H1t14 } from '../components/Headers/Headers';
import User from './components/User';
import { useState } from 'react';
import text from '../translations/es/global.json';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

// TUTORIAL: https://youtu.be/swFjfjLXe3I?si=3gfVwwLfHyVx8IsB

export default function Introduccion() {
  const [people, setPeople] = useState([
    { id: 1, name: 'JuANAN' },
    { id: 2, name: 'Koki' },
    { id: 3, name: 'Junior' },
    { id: 4, name: 'Walter' },
    { id: 5, name: 'Landa' },
    { id: 6, name: 'Albert' },
    { id: 12, name: 'Usurero12' },
  ]);

  const handleDragEnd = (event) => {
    console.log('Estado INICIAL del array: ', people);

    const { active, over } = event;

    console.log('Active ID: ', active.id);
    console.log('Over ID: ', over.id);

    const oldIndex = people.findIndex((person) => person.id === active.id);
    const newIndex = people.findIndex((person) => person.id === over.id);

    console.log('Old index: ', oldIndex);
    console.log('New index: ', newIndex);

    const finalPeople = arrayMove(people, oldIndex, newIndex);
    setPeople(finalPeople);

    console.log('Estado FINAL del array: ', finalPeople);
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <H1t14 />
      <h2>{text['dnd-page-intro']}</h2>
      <div style={{ width: '40%', marginTop: '20px' }}>
        <SortableContext items={people} strategy={verticalListSortingStrategy}>
          {people.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
}
