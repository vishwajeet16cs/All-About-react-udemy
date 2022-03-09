import React from 'react'

const TextError:React.FC = (props) => {
  return (
    <div className='error'>
      {props.children}
    </div>
  )
}

export default TextError
