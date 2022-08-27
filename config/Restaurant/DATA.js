import Recipes from './Recipes';

const categories = [
  {
    id: 1,
    title: 'Main',
    recipes: Recipes,
  },

  {
    id: 2,
    title: 'Fast Food',
    recipes: [...Recipes.slice(4, 8)],
  },
  {
    id: 3,
    title: 'Healthy Food',
    recipes: [...Recipes.slice(0, 4)],
  },
  {
    id: 4,
    title: 'Drinks',
    recipes: [...Recipes.slice(8, 11)],
  },
];

export default categories;
