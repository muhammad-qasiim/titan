// import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./components/layout/Layout";

// import Marketplace from "./pages/Marketplace/Marketplace";
import NFTDetail from "./pages/NFT/NFTDetail";
import SignIn from "./pages/SignIn.js";
import { useEffect } from "react";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const history = useHistory();
  // useEffect(() => {
  //   if (history.location.pathname !== '/') {
  //     history.push('/')
  //   }
  // }, [])
  return (
    <Layout>
      <Switch>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Route exact path="/" component={NFTDetail} />
          <Route path="/signin" component={SignIn} />
        </Web3ReactProvider>
      </Switch>
    </Layout>
  );
}

export default App;
