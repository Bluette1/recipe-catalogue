import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from '../components/App';
import configureStore, { history } from '../store';
import axios from 'axios';


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