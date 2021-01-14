import React from 'react';
import { render, screen, cleanup, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';
import configureStore, { history } from '../store';
import axios from 'axios';

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
test('renders the app', () => {
  axios.get.mockResolvedValue({
    data: { meals: [] },
  });
  render(<AppWithStore />);
  const catalogueTitle = screen.getByText(/Recipe Catalogue/i);
  expect(catalogueTitle).toBeInTheDocument();
});

it('renders app with home button component', () => {
  axios.get.mockResolvedValue({
    data: { meals: [] },
  });
  const div = document.createElement('div');
  const rendered = render(<AppWithStore />, div);
  const homeButton = rendered.getByText('Meals');
  fireEvent.click(homeButton);
  expect(homeButton).toBeDefined();
  expect(rendered).toMatchSnapshot();
});

it('renders the app with expected display component', () => {
  axios.get.mockResolvedValue({
    data: { meals: [] },
  });
  let app;
  act(() => {
    /* fire events that update state */
    app = mount(<AppWithStore />);
  });
  expect(app.find('button').text()).toBe('Meals');
  expect(app.find('.header')).toBeDefined();
});