import { Route, Switch } from "react-router-dom";
import React from 'react';
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core';
import { useHistory } from "react-router-dom";
import { setTranslations, setDefaultLanguage } from 'react-multi-lang';
import th from './language/th.json'
import en from './language/en.json'
import ClientRoutes from "./routes/ClientRoutes";
import UserRoutes from "./routes/UserRoutes";

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const selectedLanguage = localStorage.getItem('lang')
  setTranslations({th, en});
  setDefaultLanguage(selectedLanguage ? selectedLanguage : 'en');
  const history = useHistory();
  const url = history?.location?.pathname?.split('/')?.includes('admin');
  return (
    // <Provider store={store}>
      <Switch>
        <Web3ReactProvider getLibrary={getLibrary}>
        {url ?
          <Route path="/admin/:page?" component={ClientRoutes} /> :
          <Route path="/:page?" component={UserRoutes} />
        }
        </Web3ReactProvider>
      </Switch>
    // </Provider>
  );
}

export default App;
