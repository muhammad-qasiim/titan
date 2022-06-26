import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Events from "../pages/Events";
import Challenge from '../pages/Challenge';
import NFT from '../pages/NFT';
import SelectLingo from '../pages/SelectLingo';
import Layout from '../Component/Common/Layout';
import ConnectWallet from "../pages/ConnectWallet";
import UserPrivateRoute from './UserPrivateRoute';

const UserRoutes = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={SelectLingo} />
        <Route path="/nft" component={NFT} />
        <Route path="/home" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/challenge" component={Challenge} />
        <Route path="/signup" component={SignUp} />
        <UserPrivateRoute path="/profile" component={Profile} />
        <Route path="/events" component={Events} />
        <Route path="/create" component={ConnectWallet} />
        <Redirect from='/' to='/' />
      </Layout>
    </Switch>
  )
}

export default withRouter(UserRoutes);