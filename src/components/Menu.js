import React from "react";
import "../css/Menu.css";
import Add from "./Add_product";
import fork from '../svg/fork.svg'
import clipboard from '../svg/clipboard.svg'

class Menu extends React.Component {
    render() {
    const history = (page) => {
        this.props.page(page)
    }
    const home = (page) => {
        this.props.page(page)
    }
      return (
        <div className="Menu1">
            <div className="M1">
                <a href="/">
                    <img src={fork} alt="" onClick={() => home("Foods Items")} />
                </a>
            </div>
            <div className="M2">
                <a href="/History">
                    <img src={clipboard} alt="" onClick={() => history("History")} />
                </a>   
            </div>
            <div className="M3">
                <Add />
            </div>
        </div>
      );
    }
}
  
export default  Menu;