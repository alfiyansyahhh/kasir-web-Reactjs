import React from "react";
import Menu1 from "../svg/menu.svg";
import Search from "../svg/search.svg";
import "../css/Navbar.css";

class Navbar extends React.Component {

  render() {
    return (
      <div className="Navbar">
        <div className="Navbar1">
          <img className="Menu1" src={Menu1} alt="" />
        </div>
        <div className="Navbar2">{this.props.page3}</div>
        <div className="Navbar3">
          <img className="Search" src={Search} alt="" />
        </div>
      </div>
    );
  }
}

export default Navbar;
