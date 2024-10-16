import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataSucess } from './redux/action'


const App = () => {


const dispatch=useDispatch();

function handleClick(){
  dispatch(dataSucess())
}

const name = useSelector(state => state.getData.name)

  return (
    <>
    <h1>{name}</h1> 
    <button onClick={handleClick}>click me</button>
       </>
  )
}

export default App