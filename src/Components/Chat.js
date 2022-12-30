import React from 'react';

const Chat =({text,icon, from}) =>{

  if(from === "left" || null) {
    return(
      <section class="message-left">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-start-2 row-span-2 ..."><i className={`nes-${icon}`}> </i></div>
        <div class="nes-balloon from-left is-dark row-end-3 row-span-2 col-start-2 col-end-7"><p>{text}</p></div>
      </div>
    </section>
    )
  }

  if(from === "right" || null) {
    return(
      <section class="message-right">
        <div class="grid grid-rows-3 grid-flow-col gap-4">
          <div class="nes-balloon from-right is-dark row-end-3 row-span-2 col-start-1 col-end-7"><p>{text}</p></div>
          <div class="row-start-2 row-span-2 ..."><i className={`nes-${icon}`}></i></div>
        </div>
      </section>
    )
  }


}

export default Chat;
