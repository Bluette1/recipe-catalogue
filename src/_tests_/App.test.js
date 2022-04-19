import React from 'react';
import {
  render, screen, cleanup, fireEvent, act, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import App from '../components/AlphabetApp';
import configureStore, { history } from '../store';

configure({ adapter: new Adapter() });

jest.mock('axios');

afterEach(cleanup);

const store = configureStore();

const AppWithStore = () => (
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}><App /></ConnectedRouter>
    </React.StrictMode>
  </Provider>
);
test('renders the app', async () => {
  axios.get.mockImplementation(url => {
    switch (url) {
      case 'https://www.themealdb.com/api/json/v1/1/categories.php':
        return Promise.resolve({ data: { categories: [] } });
      default:
        return Promise.resolve({ data: { meals: [] } });
    }
  });
  render(<AppWithStore />);
  await waitFor(() => {
    const catalogueTitle = screen.getByText(/Recipe Catalogue/i);
    expect(catalogueTitle).toBeInTheDocument();
  });
});

it('renders app with home button component', async () => {
  axios.get.mockImplementation(url => {
    switch (url) {
      case 'https://www.themealdb.com/api/json/v1/1/categories.php':
        return Promise.resolve({ data: { categories: [] } });
      default:
        return Promise.resolve({ data: { meals: [] } });
    }
  });
  const div = document.createElement('div');
  const rendered = render(<AppWithStore />, div);
  await waitFor(() => {
    const homeButton = rendered.getByText('Meals');
    fireEvent.click(homeButton);
    expect(homeButton).toBeDefined();
    expect(rendered).toMatchSnapshot();
  });
});

it('renders the app with expected component -test with enzyme', async () => {
  axios.get.mockResolvedValue({
    data: { meals: [] },
  });
  axios.get.mockImplementation(url => {
    switch (url) {
      case 'https://www.themealdb.com/api/json/v1/1/categories.php':
        return Promise.resolve({ data: { categories: [] } });
      default:
        return Promise.resolve({ data: { meals: [] } });
    }
  });
  let app;
  act(() => {
    app = mount(<AppWithStore />);
  });
  await waitFor(() => {
    expect(app.find('button').text()).toBe('Meals');
    const link = app.find('a').get(0);
    expect(link.props.href).toBe('/');
    expect(app.find('.header')).toBeDefined();
    expect(app).toMatchSnapshot();
  });
});
