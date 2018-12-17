import React from 'react'

export default function Person({info, name}) {
  return (
    <div className="bt">
    <h1>Name : {info.name}</h1>
     <h2>age :{info.age} </h2>
     
    </div>
  )
}

const obj ={
    name : "hous"
}

const {name} = obj
