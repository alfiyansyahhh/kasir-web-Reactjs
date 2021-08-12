import React from "react";
import "../css/Menu.css";
import Add from "./Add_product";
import fork from '../svg/fork.svg'
import clipboard from '../svg/clipboard.svg'
import {Link} from 'react-router-dom'

class Menu extends React.Component {
    render() {
      return (
        <div className="Menu1">
        <div className="M1">
            <Link to="/">
                <img src={fork} alt="" />
            </Link>
        </div>
        <div className="M2">
            <Link to="/History"> <img src={clipboard} alt="" /></Link>
        </div>
        <div className="M3">
            <Add />
        </div>
    </div>
      );
    }
}
  
export default  Menu;