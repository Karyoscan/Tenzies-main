import React from 'react'
const Card = (props) => {
  return (
    <div 
    key={props.key}
    onClick={props.handleClick} 
    className={props.isTrue ? 'main-card cardsColor': 'main-card'}>
        {props.value}
    </div>
  )
}

export default Card