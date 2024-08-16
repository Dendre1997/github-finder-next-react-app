// import React from 'react'
import propTypes from 'prop-types'
import Link from 'next/link'

export default function UserItem({user: {login, avatar_url}}) {
  return (
      <div className='card shadow-md compact side bg-base-400'>
          <div className="flex-row items-center space-x-4 card-body">
              <div>
                  <div className="avatar">
                      <div className="rounded-full shadow w-14 h-14">
                          <img src={avatar_url} alt="Profile avatar" />
                      </div>
                  </div>
              </div> 
              <div>
                  <h2 className="card-title">{login}</h2>
                  <Link className='text-base-content text-opacity-30' href={`/user/${login}`}>Visit Profile</Link>
              </div> 
          </div>
          
    </div>
  )
}

UserItem.propTypes = {
    user: propTypes.object.isRequired,
  
}
