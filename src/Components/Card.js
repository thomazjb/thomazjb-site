import React from 'react';

const Card =({children}) =>{
  return(
  <div className='showcase scale-up-center'>
    <div className="nes-container is-dark with-title">
  {/* <p className="title">Container.is-dark</p> */}
      {children}
    </div>
  </div>
  )
  // return( <div className="App-box scale-up-center bg-gray-800">
  //       {children}
  //   </div>
  //   )
}

export default Card;
