import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import audio from'./music/1.mp3';


 

export default class Player extends Component {
 
  render () {
    

    return  <div className='player-wrapper'>
    <ReactPlayer
      
      className='react-player'
     
      //url="http://youtu.be/sg8Gk1iXEIs"
     url={audio}
    
      width='10%'
      height='19%'
      
      loop="true"
      playing
     
     
    />
  </div>
  
  }
}