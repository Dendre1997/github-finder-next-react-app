// import React from 'react'
import { useState, useContext } from 'react'
import GitHubContext from '@/context/github/GithubContext'
import AlertContext from '@/context/alert/AlertContex'
import { searchUsers } from '@/context/github/GitHubActions'
export default function UserSearch() {
    const [text, setText] = useState("")

    const {users, dispatch} = useContext(GitHubContext)
    const {setAlert} = useContext(AlertContext)
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (text === '') {
                setAlert('Please enter something', 'error')
                return
            } else {
                dispatch({type: 'SET_LOADING'})
                const users = await searchUsers(text)
                dispatch({ type: "GET_USERS", payload: users })

                setText('')
            }
        } catch (err) {
            dispatch({ type: 'SET_ERROR', payload: err.message });
                // setLoading(false)
        }
    }

    const handleClear = () => {
        setText("")
        dispatch({ type: 'CLEAR_USERS'})
    }
  return (
      <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
          <div>
              <form onSubmit={handleSubmit}>
                  <div className="form-control">
                      <div className="relative">
                          <input type="text"
                              id="search-input"
                                name="search"
                              className="w-full pr-40 bg-gray-200 input input-lg text-black"
                              placeholder="Search"
                              value={text}
                              onChange={handleChange}
                          />
                          <button type="submit" className="absolute top-0 right-0 bg-gray-700 rounded-l-none w-36 btn btn-lg">Go</button>
                      </div>
                  </div>
              </form>
          </div>
          {users.length > 0 && (
              <div>
                  <button onClick={handleClear} className="btn btn-ghost btn-lg">Clear</button>
          </div>
          )} 
          
    </div>
  )
}
