import { create } from 'zustand';

export const updateStore = create((set) => ({
  contador: 10,
  titulo: 'Titulo del update store',
  incrementar: (value) => set((state) => ({ contador: state.contador + value })),
}));
