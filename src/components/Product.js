import React, { Component } from 'react'
import '../css/Product.css'
import product from '../data/product'
import  { numberWithCommas }from "../numberwithcomas";
export class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
           data: product
        }
    }
    render() {
        const addCart = (e) => {
            this.props.data(e)   
        }
        return (
            <div className="Product">
              {this.state.data.map((e) =>{
                    return(
                        <div className="Product-card">
                            <div className="product-list" id={e.id}>
                                <img onClick={() => addCart(e)} className="picture" src={e.picture} alt=""/>
                                <div className="name">{e.product_name}</div>
                                <div className="price">Rp. {numberWithCommas(e.price)}</div>
                            </div>
                        </div>       
                    )        
                })}
            </div>
        )
    }
}

export default Product
