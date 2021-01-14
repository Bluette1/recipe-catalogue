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

test('', ()=>{});