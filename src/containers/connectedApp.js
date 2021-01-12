import { Provider } from 'react-redux';

import App from '../components/App';
import store from '../store';

const connectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default connectedApp;
