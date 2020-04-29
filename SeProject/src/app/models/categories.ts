export interface Category {
  name: string;
  link: string;
}

export const categories: Category[] = [
  {
    name: 'Faculties',
    link: '/faculties'
  },

  {
    name: 'Organisations',
    link: '/organisations'
  },

  {
    name: 'Map',
    link: '/map'
  },

  {
    name: 'Contact us',
    link: '/contacts'
  }
];
