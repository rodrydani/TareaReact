import React from "react";



function Button ({changeQuote, colorsRand,colors}){
    
    return(
        <div >
         <button  className='button' onClick={changeQuote} style={{background:colors[colorsRand]}}> <i class="fa-solid fa-chevron-right"></i> </button>
        </div>
       
    )
}

export default Button