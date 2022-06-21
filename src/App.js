
import { Route, Switch } from "react-router-dom";
import Layout from "./Component/Common/Layout";
import store from './store';
import { Provider } from 'react-redux'
import React, { useEffect } from 'react';
// import Marketplace from "./pages/Marketplace/Marketplace";
import SignIn from "./pages/Auth/SignIn.js";
import SignUp from "./pages/Auth/SignUp";
import ConnectWallet from "./pages/ConnectWallet";
import NFT from "./pages/NFT";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Challenge from "./pages/Challenge";
import SelectLingo from "./pages/SelectLingo";
import Events from "./pages/Events";
// import { useEffect } from "react";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
import AdminSignIn from "./pages/Admin/Auth/Login";
import AdminLayout from "./Component/Common/AdminLayout";
import { useHistory } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  const history = useHistory();
  const url = history?.location?.pathname?.split('/')?.includes('admin');

  useEffect(() => {
    // if (url) {
    //   history.push('/admin/signin')
    // }
  }, [history, url])
  return (
    <Provider store={store}>
      <Switch>
        <Web3ReactProvider getLibrary={getLibrary}>
          {url ?
            <AdminLayout>
              <Route path="/admin/signin" component={AdminSignIn} />
              <Route path="/admin/dashboard" component={Dashboard} />
            </AdminLayout>
            :
            <Layout>
              <Route exact path="/" component={SelectLingo} />
              <Route path="/nft" component={NFT} />
              <Route path="/home" component={Home} />
              <Route path="/signin" component={SignIn} />
              <Route path="/challenge" component={Challenge} />
              <Route path="/signup" component={SignUp} />
              <Route path="/profile" component={Profile} />
              <Route path="/events" component={Events} />
              <Route path="/create" component={ConnectWallet} />
            </Layout>
          }
        </Web3ReactProvider>
      </Switch>
    </Provider>
  );
}

export default App;
