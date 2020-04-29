export interface Organisation {
  id: number;
  name: string;
  img: string;
  back: string;
}

export const organisations: Organisation[] = [
  {
    id: 21,
    name: 'Alive',
    img: 'assets/software/Организации/icon.png',
    back: 'assets/software/Организации/Info Alive.png'
  },

  {
    id: 22,
    name: 'Crystal',
    img: 'src/assets/software/Меню/Faculties.png',
    back: 'assets/software/Организации/Info Crystal.png'
  },

  {
    id: 23,
    name: 'BigCityLights',
    img: 'src/assets/software/Меню/Faculties.png',
    back: 'assets/software/Организации/Info BSL.png'
  },
  {
    id: 24,
    name: 'Enactus',
    img: 'src/assets/software/Меню/Faculties.png',
    back: 'assets/software/Организации/Info enactus.png'
  },
];
