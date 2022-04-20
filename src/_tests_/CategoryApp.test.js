import React from 'react';
import {
  render, screen, cleanup, fireEvent, waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import App from '../components/CategoryApp';
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
test('renders CategoryApp', async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: { meals: [] } }));

  await act(async () => {
    render(<AppWithStore />);
  });
  await waitFor(() => {
    const catalogueTitle = screen.getByText(/Recipe Catalogue/i);
    expect(catalogueTitle).toBeInTheDocument();
    const filter = screen.getByText(/search by/i);
    expect(filter).toBeInTheDocument();
  });
});

it('renders CategoryApp with home button component', async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: { meals: [] } }));

  const div = document.createElement('div');
  let rendered;
  await act(async () => {
    rendered = render(<AppWithStore />, div);
  });

  await waitFor(() => {
    const homeButton = rendered.getByText('Meals');
    fireEvent.click(homeButton);
    expect(homeButton).toBeDefined();
    expect(rendered).toMatchSnapshot();
  });
});

it('renders CategoryApp with expected component - test with enzyme', async () => {
  axios.get.mockImplementation(() => Promise.resolve({ data: { meals: [] } }));

  let app;
  await act(async () => {
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
