import React from 'react'

const Game = () => {
  //make into a hook or something
  let params = new URLSearchParams(document.location.search);
  let title = params.get("title")

  return (
    <div className='mainContent'>Game</div>
  )
}

export default Game