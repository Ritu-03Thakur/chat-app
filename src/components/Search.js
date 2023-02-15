import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
     <input type="text" placeholder='Find a user ....'/>
      </div>

      <div className="userChat">
        <img src="logo.jpeg" alt="" height={30} width= {30}/>

        <div className="userChatInfo">
          <span>John</span>
        </div>
      </div>
    </div>
  )
}

export default Search
