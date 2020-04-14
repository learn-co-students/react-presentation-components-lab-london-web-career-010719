// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component{

state = {
  mood: 'happy'
}

handleClick = () => {
 return  this.state.mood === 'happy' ? this.setMood('sad') : this.setMood('happy')
}

setMood = (mood) => {
  this.setState({
    mood: mood
  })
}

render(){
  return(
    <div onClick={this.handleClick}>{this.state.mood}</div>
  )
}

}

export default  SimpleComponent










//
