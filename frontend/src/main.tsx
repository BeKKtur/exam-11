import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistor, store} from "./app/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
          <Provider store={store}>
              <PersistGate persistor={persistor}>
                  <App />
              </PersistGate>
          </Provider>
      </BrowserRouter>
)
