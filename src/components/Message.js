import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="logo.jpeg" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello ! i am using waht's app</p>
        <img src="logo.jpeg" alt="" />
      </div>
    </div>
  )
}

export default Message
