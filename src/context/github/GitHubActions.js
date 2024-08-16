// import { createContext, useReducer } from 'react'
import axios from 'axios'
const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
    }
})

// Get search results of users
export const searchUsers = async (text) => { 
        try {
            const params = new URLSearchParams({ q: text, })
            const response = await github.get(`/search/users?${params}`)
            return response.data.items
            //  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            //     headers: {
            //         'Authorization': `token ${GITHUB_TOKEN}`,
            //     }
            // });
            // if(!response.ok) throw new Error("Network response wasn't ok")
                
            //     const { items } = await response.json();
            //     return items
            }catch (err) {
                dispatch({ type: 'SET_ERROR', payload: err.message });
                setLoading(false)
            }
}

// Get user and repos 
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`),
    ])

    return {user: user.data, repos: repos.data}
}


    // Get suser info/data
// export const getUser = async (login) => { 
//         try {
//             // setLoading()
//             const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//                 headers: {
//                     'Authorization': `token ${GITHUB_TOKEN}`,
//                 }
//             });

//             // if(!response.ok) throw new Error("Network response wasn't ok")
//             if (response.status === 404) {
//                 window.location = '/notfound'
//             } else {
//                 const data = await response.json();
              
//                 return data
//             }

                
//             }catch (err) {
//                 dispatch({ type: 'SET_ERROR', payload: err.message });
//                 setLoading(false)
//             }
//     }
//     // Get User Repos
//     export const getUserRepos = async (login) => { 
//         try {
//             // setLoading()
//             const params = new URLSearchParams({
//                 sort: 'created',
//                 per_page: 10
//             })
            
//             const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//                 headers: {
//                     'Authorization': `token ${GITHUB_TOKEN}`,
//                 }
//             });
//             if(!response.ok) throw new Error("Network response wasn't ok")
                
//                 const data = await response.json();
                
//                 return data
//             }catch (err) {
//                 dispatch({ type: 'SET_ERROR', payload: err.message });
//                 // setLoading(false)
//             }
//     }