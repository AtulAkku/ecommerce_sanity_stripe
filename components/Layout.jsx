import React, { useState,useEffect } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Cart from './Cart';

const Layout = ({ children }) => {

  const router = useRouter()
  const [user, setUser] = useState({ value: null })
  const [key, setKey] = useState()

  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem("token")
    if (token) {
      setUser({ value: token })
    }
    setKey(Math.random)
  }, [router.query])


  const logout =()=>{
    localStorage.removeItem('token');
    setUser({value:null})
    setKey(Math.random())
    router.push(`http://localhost:3000/`)
       }


 

  return (
    <div className="layout">
      <Head>
        <title>Sports Out Studios</title>
      </Head>
      <header>
        {key && <Navbar user={user} logout={logout}/>}
      </header>
      <main className="mainContainer">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout