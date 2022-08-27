import Recipes from './Recipes';

const categories = [
  {
    id: 1,
    title: 'Main',
    recipes: Recipes,
  },
  {
    id: 2,
    title: 'Healthy Food',
    recipes: [...Recipes.slice(0, 2)],
  },
  {
    id: 3,
    title: 'Fast Food',
    recipes: [...Recipes.slice(3, 5)],
  },
  {
    id: 4,
    title: 'Drinks',
    recipes: [...Recipes.slice(6, 7)],
  },
];

export default categories;
