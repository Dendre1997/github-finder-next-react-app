'use client'
// import React from 'react'
import { useState, useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import GitHubContext from '../../context/github/GithubContext'
export default function UserResults() {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)
    const {users, loading} = useContext(GitHubContext)
    const [error, setError] = useState(null)
    // useEffect(() => {
    //      fetchUsers()
    // }, []);

    // const fetchUsers = async () => { 
    //     try {
    //     const response = await fetch(`${process.env.NEXT_PUBLIC_GITHUB_URL}/users`, {
    //         headers: {
    //             'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    //         }
    //     });
    //     if(!response.ok) throw new Error("Network response wasn't ok")

    //     const data = await response.json();
    //     setUsers(data)
    //         setLoading(false)
    //         }catch (err) {
    //         setError(err.massage)
    //         setLoading(false)
    // }
    // }

    if (loading) return <Spinner />
    if (error) return <div>Error {error}</div>
        return (
            <div className='max-h-96 overflow-y-auto grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    
    
}
