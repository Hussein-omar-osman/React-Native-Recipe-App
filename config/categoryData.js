const categoryList = [
  {
    id: 1,
    name: 'Breakfast',
    imgPath: require('../assets/ct-breakfast.jpg'),
    endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast',
  },
  {
    id: 2,
    name: 'Seafood',
    imgPath: require('../assets/ct-seafood.jpg'),
    endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
  },
  {
    id: 3,
    name: 'Side',
    imgPath: require('../assets/ct-sideDish.jpg'),
    endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Side',
  },
  {
    id: 4,
    name: 'Dessert',
    imgPath: require('../assets/ct-dessert.jpg'),
    endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert',
  },
  {
    id: 5,
    name: 'Beef',
    imgPath: require('../assets/ct-beef.jpg'),
    endPoint: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef',
  },
];

export default categoryList;
