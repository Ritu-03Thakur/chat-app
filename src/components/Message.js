import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="logo.jpeg" alt="" />
        <span>just now</span>
      </div>
      <div className="mesasgeContent">
        <span>hello ! i am using waht's app</span>
        {/* <img src="logo.jpeg" alt="" /> */}
      </div>
    </div>
  )
}

export default Message
