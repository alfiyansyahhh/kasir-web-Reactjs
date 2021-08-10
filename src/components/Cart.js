import React, { Component } from 'react'
import "../css/Cart.css"
import  {numberWithCommas} from "../numberwithcomas";
import ntsf from '../svg/ntf.svg'

export class Cart extends Component {   
    
    render() { 
        let cart = this.props.data

        const plusQty= (data) => {
            this.props.btnPlusQty(data)
        }  
        const minQty = (data) => {
            this.props.btnMinQty(data)
        }
        const cancel = () => {
            this.props.cancel()
        }   

        let total= 0
        let ntf = cart.length
        this.props.data.forEach((e) => {
           total += e.price * e.qty
        })

        
        return (
            <div className="Cart">
                <div className="Notif-Cart">
                    <div className="label">Cart</div>
                    <div className="ntf">
                        <img src={ntsf} alt="" />
                        <p className="ntf2">{ntf}</p>
                    </div>
                </div>
                <div className="Item-Cart">
                 {cart.map((e) =>{
                    return(
                        <div className="Cart-card">
                            <div className="Cart-list" id={e.id}>
                                <div className="l1">
                                    <img className="Cart-picture" width="150px" height="120px" src={e.picture} alt=""/>
                                </div>
                                <div className="l2">
                                    <div className="Cart-name">{e.product_name}</div>
                                    <div className="b">
                                        <div className="c">
                                            <div className="Tombol">
                                                <div className="Minus" onClick={() => minQty(e)}>-</div>
                                                <div className="Qty"><input type="text" value={e.qty}/></div>
                                                <div className="Plus" onClick={() => plusQty(e)}>+</div>         
                                              </div>
                                        </div>
                                        <div className="Cart-price">Rp.{numberWithCommas(e.qty * e.price)}</div>
                                    </div>
                                </div>  
                            </div>
                        </div>       
                    )
                    
                 })}
                </div>
                <div className="Menu-cart">
                    <div className="Total">
                        <div className="t1">Total:</div>
                        <div className="t2">Rp. {numberWithCommas(total)}</div>    
                    </div>
                    <div className="Info">*Belum termasuk ppn</div>
                    <div className="Checkout">Checkout</div>
                    <div className="Cancel" onClick={cancel}>Cancel</div>
                </div>
            </div>
        )
    }
}

export default Cart
