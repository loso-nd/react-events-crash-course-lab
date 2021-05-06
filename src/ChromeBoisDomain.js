import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (e) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * recall `e` represents the event we are want to target therefore in this case we want e.clientX, and e.cleintY. We can find this when we console.log(e)
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    //debugger;
    //console.log(e.clientX, e.clientY)
    drawChromeBoiAtCoords(e.clientX, e.clientY)
  }
   
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */

  handleClick = () => {
    toggleCycling()
  }
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  handleKey = (e) => {
    //console.log(e)
    // debugger
    if (e.key === 'a'){
      //console.log(e)
      console.log("I am the first letter of the alphabet")
      return resize(`+`)
    }
    else if (e.key === "s"){
      console.log("I am the 19 letter of the alphabet")
      return resize("-")
    } else {
      return `Not what we are looking for!`
    }

  }
  
  render() {
    return (
      <canvas 
        onClick={this.handleClick}
        onKeyPress={this.handleKey}
       
        onMouseMove={this.handleMouseMove}
        
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
