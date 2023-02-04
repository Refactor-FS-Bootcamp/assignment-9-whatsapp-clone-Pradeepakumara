import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
// import reducer, { initialState } from './components/reducer';
// import { StateProvider } from './components/StateProvider';
import store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store} >
  <App />
  </Provider>
      
  </>
);


