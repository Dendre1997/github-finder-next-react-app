'use client'

// import Link from 'next/link';
// import { FaHome } from 'react-icons/fa'
import UserResults from '@/components/users/UserResults';
import UserSearch from '@/components/users/UserSearch';
export default function Home() {
    return (
      <>       
        <UserSearch/>
        <UserResults />
      </>
  )
}