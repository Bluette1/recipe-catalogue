import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Route } from 'react-router-dom';
import Routes from '../Routes';
import MealDetails from '../components/MealDetails';
import AlphabetApp from '../components/AlphabetApp';
import CategoryApp from '../components/CategoryApp';
import ListByAlphabet from '../layouts/ListByAlphabet';
import NotFound from '../layouts/NotFound';
import ListBy from '../layouts/ListBy';
import ListByCategory from '../containers/ListByCategory';

configure({ adapter: new Adapter() });

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes />);
    pathMap = component.find(Route).reduce((map, route) => {
      const routeMap = map;
      const routeProps = route.props();
      routeMap[routeProps.path] = routeProps.component;
      return routeMap;
    }, {});
  });
  it('should show ListByAlphabet component for /alphabet route', () => {
    const listByAlphabet = pathMap['/alphabet'];
    expect(listByAlphabet).toBe(ListByAlphabet);
  });

  it('should show ListByCategory component for /category route', () => {
    const listByCategory = pathMap['/category'];
    expect(listByCategory).toBe(ListByCategory);
  });

  it('should show CategoryApp component for /filter route', () => {
    const app = pathMap['/filter'];
    expect(app).toBe(CategoryApp);
    expect(app).toMatchSnapshot();
  });

  it('should show AlphabetApp component for /search route', () => {
    const app = pathMap['/search'];
    expect(app).toBe(AlphabetApp);
    expect(app).toMatchSnapshot();
  });

  it('should show ListBy component for / route', () => {
    const homePage = pathMap['/'];
    expect(homePage).toBe(ListBy);
    expect(homePage).toMatchSnapshot();
  });

  it('should show MealDetails component  for /details route', () => {
    const mealDetails = pathMap['/details'];
    expect(mealDetails).toBe(MealDetails);
    expect(mealDetails).toMatchSnapshot();
  });
  it('should show NotFound component for any route that is not defined', () => {
    const unKnownPath = pathMap.undefined;
    expect(unKnownPath).toBe(NotFound);
    expect(unKnownPath).toMatchSnapshot();
  });
});
