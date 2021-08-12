import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import '../css/History.css'
import Card1 from '../svg/card1.svg'
import Card2 from '../svg/card2.svg'
import Card3 from '../svg/card3.svg'
import Card4 from '../svg/card4.svg'



class About extends React.Component{
    render(){ 
        return(
        <div fluid={true}>
        <Navbar title="History"/>               
        <main className="History">
            <Menu />    
            <article className="Article-history">
                <img className="test2" src={Card1} alt=""/>
                <img className="test2" src={Card2} alt=""/>
                <img className="test2" src={Card3} alt=""/>
                <img className="test" src={Card4} alt=""/>
            </article>         
        </main>  
        </ div>
                
        
        )
    }
}

export default About