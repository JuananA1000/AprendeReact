import { create } from 'zustand';

export const counterStore = create(() => ({
  contador: 10,
  titulo: 'Titulo del counter store'
}));
