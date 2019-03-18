import React from 'react'

const SimplerComponent = (props) => {

  const handleClick = (event) => {
    alert('Are you happy too?')
  }

  return<div onClick={props.handleClick}>I am just happy</div>
}



export default SimplerComponent
