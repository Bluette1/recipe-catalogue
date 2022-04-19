export const filteredMealsByCategory = (meals, filter) => (filter !== 'All' && filter !== 'CATEGORIES' ? (meals.filter(meal => meal.strCategory === filter)) : meals);
export const filteredMealsByAlphabet = (meals, filter) => (filter !== 'All' && filter !== 'SEARCH BY' ? (meals.filter(meal => meal.strMeal[0].toLowerCase() === filter.toLowerCase())) : meals);
