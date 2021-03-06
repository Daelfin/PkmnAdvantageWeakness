import { Type } from './type';

export const TYPES: Type[] = [
  {
    id: 0,
    name: 'Normal',
    damage_relations: {
      double_damage_from: [1],
      double_damage_to: [],
      half_damage_from: [],
      half_damage_to: [5, 8],
      no_damage_from: [7],
      no_damage_to: [7],
    },
  },
  {
    id: 1,
    name: 'Fighting',
    damage_relations: {
      double_damage_from: [2, 13, 17],
      double_damage_to: [0, 5, 8, 14, 16],
      half_damage_from: [5, 6, 16],
      half_damage_to: [2, 3, 6, 13, 17],
      no_damage_from: [],
      no_damage_to: [7],
    },
  },
  {
    id: 2,
    name: 'Flying',
    damage_relations: {
      double_damage_from: [5, 12, 14],
      double_damage_to: [1, 6, 11],
      half_damage_from: [1, 6, 11],
      half_damage_to: [5, 8, 12],
      no_damage_from: [4],
      no_damage_to: [],
    },
  },
  {
    id: 3,
    name: 'Poison',
    damage_relations: {
      double_damage_from: [4, 13],
      double_damage_to: [11, 17],
      half_damage_from: [1, 3, 6, 11, 17],
      half_damage_to: [3, 4, 5, 7],
      no_damage_from: [],
      no_damage_to: [8],
    },
  },
  {
    id: 4,
    name: 'Ground',
    damage_relations: {
      double_damage_from: [10, 11, 14],
      double_damage_to: [3, 5, 8, 9, 12],
      half_damage_from: [3, 5],
      half_damage_to: [6, 11],
      no_damage_from: [12],
      no_damage_to: [2],
    },
  },
  {
    id: 5,
    name: 'Rock',
    damage_relations: {
      double_damage_from: [1, 4, 8, 10, 11],
      double_damage_to: [2, 6, 9, 14],
      half_damage_from: [0, 2, 3, 9],
      half_damage_to: [1, 4, 8],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 6,
    name: 'Bug',
    damage_relations: {
      double_damage_from: [2, 5, 9],
      double_damage_to: [11, 13, 16],
      half_damage_from: [1, 4, 11],
      half_damage_to: [1, 2, 3, 7, 8, 9, 17],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 7,
    name: 'Ghost',
    damage_relations: {
      double_damage_from: [7, 16],
      double_damage_to: [7, 13],
      half_damage_from: [3, 6],
      half_damage_to: [16],
      no_damage_from: [0, 1],
      no_damage_to: [0],
    },
  },
  {
    id: 8,
    name: 'Steel',
    damage_relations: {
      double_damage_from: [1, 4, 9],
      double_damage_to: [5, 14, 17],
      half_damage_from: [0, 2, 5, 6, 8, 11, 13, 14, 15, 17],
      half_damage_to: [8, 9, 10, 12],
      no_damage_from: [3],
      no_damage_to: [],
    },
  },
  {
    id: 9,
    name: 'Fire',
    damage_relations: {
      double_damage_from: [4, 5, 10],
      double_damage_to: [6, 8, 11, 14],
      half_damage_from: [6, 8, 9, 11, 14, 17],
      half_damage_to: [5, 9, 10, 15],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 10,
    name: 'Water',
    damage_relations: {
      double_damage_from: [11, 12],
      double_damage_to: [4, 5, 9],
      half_damage_from: [8, 9, 10, 14],
      half_damage_to: [10, 11, 15],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 11,
    name: 'Grass',
    damage_relations: {
      double_damage_from: [2, 3, 6, 9, 14],
      double_damage_to: [4, 5, 10],
      half_damage_from: [4, 10, 11, 12],
      half_damage_to: [2, 3, 6, 8, 9, 11, 15],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 12,
    name: 'Electric',
    damage_relations: {
      double_damage_from: [4],
      double_damage_to: [2, 10],
      half_damage_from: [2, 8, 12],
      half_damage_to: [11, 12, 15],
      no_damage_from: [],
      no_damage_to: [4],
    },
  },
  {
    id: 13,
    name: 'Psychic',
    damage_relations: {
      double_damage_from: [6, 7, 16],
      double_damage_to: [1, 3],
      half_damage_from: [1, 13],
      half_damage_to: [8, 13],
      no_damage_from: [],
      no_damage_to: [16],
    },
  },
  {
    id: 14,
    name: 'Ice',
    damage_relations: {
      double_damage_from: [1, 5, 8, 9],
      double_damage_to: [2, 4, 11, 15],
      half_damage_from: [14],
      half_damage_to: [8, 9, 10, 14],
      no_damage_from: [],
      no_damage_to: [],
    },
  },
  {
    id: 15,
    name: 'Dragon',
    damage_relations: {
      double_damage_from: [14, 15, 17],
      double_damage_to: [15],
      half_damage_from: [9, 10, 11, 12],
      half_damage_to: [8],
      no_damage_from: [],
      no_damage_to: [17],
    },
  },
  {
    id: 16,
    name: 'Dark',
    damage_relations: {
      double_damage_from: [1, 6, 17],
      double_damage_to: [7, 13],
      half_damage_from: [7, 16],
      half_damage_to: [1, 16, 17],
      no_damage_from: [13],
      no_damage_to: [],
    },
  },
  {
    id: 17,
    name: 'Fairy',
    damage_relations: {
      double_damage_from: [3, 8],
      double_damage_to: [1, 15, 16],
      half_damage_from: [1, 6, 16],
      half_damage_to: [3, 8, 9],
      no_damage_from: [15],
      no_damage_to: [],
    },
  },
];
