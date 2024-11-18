import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './app/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
