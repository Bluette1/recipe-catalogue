const filteredMeals = (meals, filter) => (filter !== 'All' && filter !== 'CATEGORIES' ? (meals.filter(meal => meal.strCategory === filter)) : meals);

export default filteredMeals;
