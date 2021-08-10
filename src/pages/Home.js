import React from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Product from "../components/Product";
import Menu from "../components/Menu";
import "../css/Home.css";

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           cart: [],
           page: 'Food Items'
        }
       
    }

  render() {

    const cekCart = (data) => {
    const find = this.state.cart.find((e) => {
        if(e.id === data.id){
            return e
        }
    })
    return find  
    }

    const plusQty = (data) => {
        const newCart = this.state.cart.map((e) => {
             if(e.id === data.id){
                return{
                    id: e.id,
                    picture: e.picture,
                    product_name: e.product_name,
                    price: e.price,
                    qty: e.qty + 1
                }
             } else{
                 return e
             }
         })
         this.setState({
            cart: newCart
          })
          
     }
    const del = (data) => {
        const newCart = this.state.cart.filter((e) => {
            if(e.id !== data.id)
            return e
        })
        this.setState({
            cart: newCart
          })
        
    }
    const cancel = () => {
        this.setState({
            cart: []
          })
          
    }
    const minQty = (data) => {
        const newCart = this.state.cart.map((e) => {
             if(e.id === data.id){
                return{
                    id: e.id,
                    picture: e.picture,
                    product_name: e.product_name,
                    price: e.price,
                    qty: e.qty - 1
                }
             } else{
                 return e
             }
         })
         if(cekCart(data).qty > 1){
            this.setState({
                cart: newCart
              })
              
        } else if (cekCart(data).qty <= 1){
           del(data)
           
        }       
     }


    const getfromproduct = (data) => {
        let addQty = {...data, qty:1}
        if(cekCart(data) === undefined){
            this.setState({
                cart:[...this.state.cart, addQty]
            })
        } else {
            plusQty(data)
            
        }
    }
    const getpage = (page1) => {
        this.setState({
            page: page1
        })
    }
     
    return (
      <div className="Home">
          <div className="Navbar-Home">
              <div className="N1">
                <Navbar page3={this.state.page} />
                <div className="Main">
                    <Menu page={getpage} />
                    <div className="Article">
                        <Product data={getfromproduct} />
                    </div>           
                </div>
              </div>
              <div className="N2">
                <Cart data={this.state.cart} btnPlusQty={plusQty} btnMinQty={minQty} cancel={cancel} />
              </div>
          </div>
      </div>
    );
  }
}

export default Home;
