
import React, { useState, Component } from 'react';
import ReactDOM from "react-dom";
import {CSSTransition} from 'react-transition-group';
import  './Santa.css';


function Santa() {
    
    const [inProp, setInProp] = useState(false);

  
       

        return (
            <CSSTransition
            in={inProp} timeout={200} classNames="my-node"
            >
                
            <div className="santa">
                <script />
            </div>
            </CSSTransition>
        )
    }

export default Santa;


