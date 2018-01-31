import React, { Component } from "react";
import Header from "../../shared/Header/Header";
import Splash from "../../sections/Splash/Splash";
import About from "../../sections/About/About";
import LiveBroadcast from "../../sections/LiveBroadcast/LiveBroadcast";
import AdvancedAnalytics from "../../sections/AdvancedAnalytics/AdvancedAnalytics";

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash />
        <About />
        <LiveBroadcast />
        <AdvancedAnalytics />
      </div>
    );
  }
}

export default Index;
