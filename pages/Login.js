import React, { useState } from 'react'
import styles from '../styles/Style.module.css'
import { FaLinkedinIn, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const login = () => {
  const router = useRouter();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const onchange = (e) => {
    if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setpassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      });
      return;
    }

    const data = { email, password }
    const res = await fetch(`http://localhost:3000/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json();
    setemail("")
    setpassword("")

    if (response.success) {
      localStorage.setItem('token', response.token)
      toast.success('Your are successfully logged in', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push(`http://localhost:3000/`)
      }, 800);
    } else {
      toast.error(response.error, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }

  return (
    <div className={styles.body}>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className={styles.boxform}>
        <div className={styles.left}>
          <div className={styles.overlay}>
            <p className={styles.hadding1}>Hello World.</p>
            <p className={styles.para}>By logging in, you agree to SOS's Privacy Policy and Terms of Use</p>
            <span>
              <p className={styles.para}>login with social media</p>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm" />
              </a>
            </span>
          </div>
        </div>


        <div className={styles.right}>
          <p className={styles.hadding5}>Login</p>
          <form onSubmit={handleSubmit}>
            <p className={styles.para}>Don't have an account? <strong><a href="/Signup">Create Your Account</a></strong> it takes less than a minute</p>
            <div className={styles.inputs}>
              <label htmlFor='email' className={styles.lab}>Email</label>
              <input onChange={onchange} name="email" value={email} type="text" placeholder="Email" />
              <br></br>
              <label htmlFor='password' className={styles.lab}>Password</label>
              <input onChange={onchange} name="password" value={password} type="password" placeholder="Password" />
            </div>

            <br></br>
            
            <a href={'/ForgotPassword'}> <p className={styles.lab}>Forgot password</p></a>

            <br></br>
            <div className={styles.buttons}>
              <button>Login</button>
              {/* <a href='#'>Forgot password?</a>
              <a href="/Signup">Signup</a> */}
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default login