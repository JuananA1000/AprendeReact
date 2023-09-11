import { create } from 'zustand';

export const getStore = create((set, get) => ({
  contador: 10,
  titulo: 'Titulo del método get',
  posts: [],

  incrementar: (value) => set((state) => ({ contador: state.contador + value })),

  getPosts: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    set((state) => ({ ...state, posts }));
    console.log('POSTS: ', posts);
  },

  clear: () => {
    set({}, true);
  },

  multiplicar: (value) => {
    const { contador } = get();
    set({ contador: contador * value });
  },
}));
