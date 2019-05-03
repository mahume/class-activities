import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";

import Navbar from "./components/Navbar";

const styles = {
  appStyle: {
    fontFamily: 'times-new-roman'
  }
}

function App() {
  return (
    <div style={styles.appStyle}>
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}

export default App;
