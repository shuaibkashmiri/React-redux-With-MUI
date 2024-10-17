import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userData } from './redux/action'


const App = () => {


const dispatch=useDispatch();

function handleClick(){
  dispatch(userData())
}

const users = useSelector(state => state.getData.users)

console.log(users)

  return (
    <>
    <p>{users}</p>
    <button onClick={handleClick}>click me</button>
       </>
  )
}

export default App