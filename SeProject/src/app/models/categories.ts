export interface Category {
  name: string;
  link: string;
  img: string;
}

export const categories: Category[] = [
  {
    name: 'Faculties',
    link: '/faculties',
    img: 'assets/software/Организации/facultyIcon.png'
  },

  {
    name: 'Organisations',
    link: '/organisations',
    img: 'assets/software/Организации/organisationsIcon.png'
  },

  {
    name: 'Map',
    link: '/map',
    img: 'assets/software/Организации/mapIcon.png'
  },

  {
    name: 'Contact us',
    link: '/contacts',
    img: 'assets/software/Организации/contactIcon.png'
  }
];

