import React,{ useContext} from 'react'
import { UserContext } from './App'

const Component3 = () => {
    const User = useContext(UserContext)
  return (
    <div>
      <h5>Component 3</h5>
      <h4>{`HEllo ${User} from last component`}</h4>
    </div>
  )
}

export default Component3
