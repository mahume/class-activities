import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
const styles = {
  headerStyle: {
    backgroundColor: 'red',
    fontSize: '100px',
  } 
}

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headerStyle}>Welcome</h1>
    </header>
  );
}

export default Header;
