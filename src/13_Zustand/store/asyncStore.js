import { create } from 'zustand';

export const asyncStore = create((set) => ({
  contador: 10,
  titulo: 'Titulo del async store',
  posts: [],
  incrementar: (value) => set((state) => ({ contador: state.contador + value })),

  getPosts: async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    set((state) => ({ ...state, posts }));
    console.log('POSTS: ', posts);
  },
}));
