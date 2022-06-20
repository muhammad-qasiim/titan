
import { Route, Switch, useHistory } from "react-router-dom";
import Layout from "./Component/Common/Layout";

// import Marketplace from "./pages/Marketplace/Marketplace";
import NFTDetail from "./pages/NFT/NFTDetail";
import SignIn from "./pages/SignIn.js";
import SignUp from "./pages/SignUp";
// import NFT from "./pages/NFT";
import Profile from "./pages/Profile";
// import SelectLanguage from "./pages/SelectLanguage";
// import { useEffect } from "react";
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
          {/* <Route path="/nft" component={NFT} />  */}
          {/* <Route path="/select-language" component={SelectLanguage} /> */}
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/profile" component={Profile} />
        </Web3ReactProvider>
      </Switch>
    </Layout>
  );
}

export default App;
