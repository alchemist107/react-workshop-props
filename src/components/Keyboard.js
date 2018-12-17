import React, { Component } from 'react'
import "./keyboard.css"
import Key from "./Key"
import Person from "./Person"

const keys = ["1","2","3","4","5","6"]
const asma = [
    {
        name : "chaima",
        age : 23
    },
    {
        name : "asma",
        age : 25000
    },
    {
        name : "houssem",
        age : 17
    }
]
const test = "rgid"
const lala = "tata"

export default class Keyboard extends Component {
  render() {
    return (
      <div className="board">
        mamam
        {keys.map(el => 
            <Key situation={el} />
        )}
        {
            asma.map(el => <Person info={el} name={el.name}/>)       }

            
   
      </div>
    )
  }
}
