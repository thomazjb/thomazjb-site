import React from 'react';

const Chat =({text,icon, from}) =>{

  if(from === "left" || null) {
    return(
      <section className="message-left">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-start-2 row-span-2 ..."><i className={`nes-${icon}`}> </i></div>
        <div className="nes-balloon from-left is-dark row-end-3 row-span-2 col-start-2 col-end-7"><p>{text}</p></div>
      </div>
    </section>
    )
  }

  if(from === "right" || null) {
    return(
      <section className="message-right">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="nes-balloon from-right is-dark row-end-3 row-span-2 col-start-1 col-end-7"><p>{text}</p></div>
          <div className="row-start-2 row-span-2 ..."><i className={`nes-${icon}`}></i></div>
        </div>
      </section>
    )
  }


}

export default Chat;
