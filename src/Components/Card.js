import React from 'react';

const Card =({children}) =>{
  return(

    <div className="nes-container is-rounded is-dark with-title">
      {children}
    </div>

  )
  // return( <div className="App-box scale-up-center bg-gray-800">
  //       {children}
  //   </div>
  //   )
}

export default Card;
