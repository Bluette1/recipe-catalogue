import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';
import { Route } from 'react-router-dom';
import Routes from '../Routes';
import App from '../components/App';
import MealDetails from '../components/MealDetails';
import ListByAlphabet from '../layouts/ListByAlphabet';
import NotFound from '../layouts/NotFound';

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
  it('should show Home component for / route', () => {
    const homePage = pathMap['/'];
    expect(homePage).toBe(ListByAlphabet);
  });

  it('should show App component for /search route', () => {
    const app = pathMap['/search'];
    expect(app).toBe(App);
    expect(app).toMatchSnapshot();
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
