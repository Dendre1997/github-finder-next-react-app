// import React from 'react'


import PropTypes from 'prop-types';
import RepoItem from './RepoItem'
export default function RepoList({repos}) {
  return (
      <div className='rounded-lg shadow-lg card bg-gray-700'>
          <div className="card-body">
              <h2 className="text-3xl my-4 font-bold card-title">
                  Latest Repositories
              </h2>
              {repos.map((repo) => {
                return  <RepoItem key={repo.id} repo={repo} />
              })}
          </div>
    </div>
  )
}

RepoList.PropTypes = {
    repos: PropTypes.array.isRequired,
  
}
