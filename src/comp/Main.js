import React, { useState } from 'react'
import Navbar from './Navbar'
import './main.css'
import { nanoid } from 'nanoid'
import Card from './Card'
import { useEffect } from 'react'


const Main = () => {
const [ count,setCount] = useState(CardNumbers())
const [game,setGame]=useState(false)
  

useEffect(()=>{

 const allTrue=  count.every((element)=>element.isTrue)
 const firstValue  = count[0].value

 const allValue = count.every((element)=>element.value===firstValue)



 if (allTrue && allValue) {
  setGame(true)
 alert('You Won');
 }
 else{
  setGame(false)
 }



},[count])

  function CardNumbers (){
 let bosDizzi =[]

  for (let i = 0; i < 10; i++) {
 
  bosDizzi.push({id : nanoid() , isTrue : false , value :  Math.ceil(Math.random()*6),})
  

    
  }
return bosDizzi
  }

 const  GeneratorClick =()=>{

  setCount(pre=>pre.map((element)=>{
 return  element.isTrue ?  element : {id : nanoid() , isTrue : false , value :  Math.ceil(Math.random()*6),}

  }))

 }

  const HadleClick = (id)=>{

    setCount(pre=>pre.map((element)=>{
    
    return   element.id===id ? {...element,isTrue:!element.isTrue} : element
    
    }))
    
    }

    const ResetGame= ()=>{

      setCount(pre=>pre.map((element)=>{
        return  {id : nanoid() , isTrue : false , value :  Math.ceil(Math.random()*6),}
       
         }))


    }


const card =  count.map((element)=>{return(

<Card 
value = {element.value}
key = { element.id}
id = {element.id}
isTrue ={ element.isTrue}
handleClick ={ ()=>HadleClick(element.id)}


/>
)})

  return (
    <div className='Main-div'>
      <div className='ekran'>

        <Navbar/>
        <div className='Cards-div'>
         {card}
        </div>

        <button   onClick={()=>game ? ResetGame() : GeneratorClick()}
                  className='main-btn'>{game?'reset ':'roll'}</button>
       </div>      

    </div>
  )
}

export default Main