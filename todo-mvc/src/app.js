/* global localStorage */
import { Provider } from '@dws/muster-react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'todomvc-app-css/index.css';
import App from './components/app';
import Info from './components/info';
import createGraph from './muster';
import saveItemsToLocalStorage from './utils/save-items-to-local-storage';

export default function Main() {
  const graph = saveItemsToLocalStorage(createGraph());
  return (
    <Provider muster={graph}>
      <BrowserRouter>
        <div>
          <App />
          <Info />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
