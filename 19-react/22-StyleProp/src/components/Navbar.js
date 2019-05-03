import React from "react";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navbarStyle: {
    backgroundColor: 'green',
    color: 'white',
    justifyContent: 'flex-end',
  } 
}

function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a style={styles.navbarStyle} href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
