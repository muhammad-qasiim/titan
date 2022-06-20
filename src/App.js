
import { Route, Switch } from "react-router-dom";
import Layout from "./Component/Common/Layout";

// import Marketplace from "./pages/Marketplace/Marketplace";
import SignIn from "./pages/Auth/SignIn.js";
import SignUp from "./pages/Auth/SignUp";
import ConnectWallet from "./pages/ConnectWallet";
import CreateProfile from "./pages/CreateProfile";
import NFT from "./pages/NFT";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SelectLingo from "./pages/SelectLingo";
// import { useEffect } from "react";
import Web3 from "web3";
import { Web3ReactProvider } from '@web3-react/core'
function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  // const history = useHistory();
  // useEffect(() => {
  //   if (history.location.pathname !== '/') {
  //     history.push('/')
  //   }
  // }, [])
  return (
    <Layout>
      <Switch>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Route exact path="/" component={SelectLingo} />
          <Route path="/nft" component={NFT} /> 
          <Route path="/home" component={Home} /> 
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
          <Route path="/create" component={ConnectWallet} />
          <Route path="/create_item" component={CreateProfile} />
        </Web3ReactProvider>
      </Switch>
    </Layout>
  );
}

export default App;
