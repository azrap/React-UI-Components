import React from 'react';
import './Card.css';



import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';


function CardContainer (){
    
    return (
        <div className="card-container"
        onClick={()=> window.open("https://reactjs.org", "_blank")}>
        <CardBanner />
        <CardContent />
         </div>
    );
}

export default CardContainer