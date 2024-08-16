"use client"
import { createContext, useReducer } from 'react'
import gitHubReducer from './GithubReducer'

const GitHubContext = createContext()

// const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL
// const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN


    // export const GithubContext = createContext(initialState);


export const GitHubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        error: null,
    }
    const [state, dispatch] = useReducer(gitHubReducer, initialState)

    // Set loading
    // const setLoading = () => dispatch({ type: 'SET_LOADING' });

    // const getUser = async (login) => { 
    //     try {
    //         setLoading()
    //         const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    //             headers: {
    //                 'Authorization': `token ${GITHUB_TOKEN}`,
    //             }
    //         });

    //         // if(!response.ok) throw new Error("Network response wasn't ok")
    //         if (response.status === 404) {
    //             window.location = '/notfound'
    //         } else {
    //             const data = await response.json();
              
    //             dispatch({
    //                 type: 'GET_USER',
    //                 payload: data,
    //                 // loading: false,
    //             })
    //         }

                
    //         }catch (err) {
    //             dispatch({ type: 'SET_ERROR', payload: err.message });
    //             setLoading(false)
    //         }
    // }
    // // Get User Repos
    // const getUserRepos = async (login) => { 
    //     try {
    //         setLoading()
    //         const params = new URLSearchParams({
    //             sort: 'created',
    //             per_page: 10
    //         })
            
    //         const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    //             headers: {
    //                 'Authorization': `token ${GITHUB_TOKEN}`,
    //             }
    //         });
    //         if(!response.ok) throw new Error("Network response wasn't ok")
                
    //             const data = await response.json();
                
    //             dispatch({
    //                 type: 'GET_REPOS',
    //                 payload: data,
    //                 // loading: false,
    //             })
    //         }catch (err) {
    //             dispatch({ type: 'SET_ERROR', payload: err.message });
    //             setLoading(false)
    //         }
    // }

    // Clear Users from state 
    // const clearUsers = () => {
    //     dispatch({ type: 'CLEAR_USERS', payload: [] });
    //     // setLoading(false)
    //     }

        
        // Set loading
        // const setLoading = () => dispatch({type: 'SET_LOADING'})
        
        return <GitHubContext.Provider value={{
            ...state,
            dispatch,
            // clearUsers,
            // UsersSearch,
            // getUser,
            // getUserRepos,
            // users: state.users,
            // loading: state.loading,
            // user: state.user,
            // repos: state.repos,
            // fetchUsers,
    }}>
        {children}
    </GitHubContext.Provider>
}

export default GitHubContext


















    // Get Initiial users (testing purposes)
    // const fetchUsers = async () => { 
    //     setLoading()
        
    //     try {
    //         const response = await fetch(`${GITHUB_URL}/users`, {
    //             headers: {
    //                 'Authorization': `token ${GITHUB_TOKEN}`,
    //             }
    //         });
    //         if(!response.ok) throw new Error("Network response wasn't ok")
                
    //             const data = await response.json();
    //             // console.log(data)
    //             // setUsers(data)
    //             // setLoading(false)
    //             dispatch({
    //                 type: 'GET_USERS',
    //                 payload: data,
    //                 loading: false,
    //             })
    //         }catch (err) {
    //             setError(err.massage)
    //             setLoading(false)
    //         }
    //     }
    // const searchUsers = async (text) => { 
    //     try {
    //         setLoading()
    //         const params = new URLSearchParams({
    //             q: text,
    //         })
    //         const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //             headers: {
    //                 'Authorization': `token ${GITHUB_TOKEN}`,
    //             }
    //         });
    //         if(!response.ok) throw new Error("Network response wasn't ok")
                
    //             const {items} = await response.json();
    //             // console.log(data)
    //             // setUsers(data)
    //             // setLoading(false)
    //             dispatch({
    //                 type: 'GET_USERS',
    //                 payload: items,
    //                 // loading: false,
    //             })
    //         }catch (err) {
    //             dispatch({ type: 'SET_ERROR', payload: err.message });
    //             setLoading(false)
    //         }
    // }
    