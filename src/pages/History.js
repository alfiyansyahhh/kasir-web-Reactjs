import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import '../css/History.css'
import Card1 from '../svg/card1.svg'
import Card2 from '../svg/card2.svg'
import Card3 from '../svg/card3.svg'
import Card4 from '../svg/card4.svg'



class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           page: "History"
        }
    }
    render(){
        const getpage2 = (page) => {
            this.setState({
                page: page
            })
    
        }  
        return(
        <div>
        <Navbar page3={this.state.page} />               
        <main className="History">
            <Menu page={getpage2}/>    
            <article className="Article-history">
                <img src={Card1} alt=""/>
                <img src={Card2} alt=""/>
                <img src={Card3} alt=""/>
                <img src={Card4} alt=""/>
            </article>         
        </main> 
            
            
        </div>
                
        
        )
    }
}

export default About