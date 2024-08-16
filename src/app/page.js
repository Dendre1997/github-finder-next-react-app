// import Image from "next/image";
'use client';
import { useRouter } from 'next/navigation';
import HomePage from "./home/page";
import About from "./about/page";
import User from "./user/[login]/page";
export default function App() {
  const router = useRouter()
  const pathname = router.pathname

  let Component;

   if (pathname === '/about') {
    Component = About;
  } else if (pathname && pathname.startsWith('/user/')) { // Handle dynamic user routes
    Component = User;
  } else {
    Component = HomePage; // Fallback or use Custom404
  }
  
    // Component = HomePage;
  return <Component/>
}
