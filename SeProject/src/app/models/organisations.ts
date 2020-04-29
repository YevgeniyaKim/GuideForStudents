export interface Organisation {
  id: number;
  name: string;
  category_id: number;
}

export const organisations: Organisation[] = [
  {
    id: 21,
    name: 'Alive',
    category_id: 2
  },

  {
    id: 22,
    name: 'Crystal',
    category_id: 2
  },

  {
    id: 23,
    name: 'BigCityLights',
    category_id: 2
  },
];
