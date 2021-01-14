import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './components/App';
import configureStore, { history } from './store';

const store = configureStore();

const AppWithStore = () => (
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}><App /></ConnectedRouter>
      /
    </React.StrictMode>
  </Provider>
);
test('renders the app', () => {
  render(<AppWithStore />);
  const catalogueTitle = screen.getByText(/Recipe Catalogue/i);
  expect(catalogueTitle).toBeInTheDocument();
});
