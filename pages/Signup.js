import React, { useState } from 'react'
import styles from '../styles/Style.module.css'
import { FaLinkedinIn, FaGoogle, FaFacebookF } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  const onchange = (e) => {
    if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setpassword(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, password, phone }
    const res = await fetch(`http://localhost:3000/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json();
    setemail("")
    setname("")
    setpassword("")
    setphone("")

    if (response.success) {
      toast.success('Your account have been created! Now please Login', {
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
            <p className={styles.para}>By Singing in, you agree to SOS's Privacy Policy and Terms of Use</p>
            <span>
              <p>login with social media</p>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaLinkedinIn className="text-sm" />
              </a>
              <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm" />
              </a>
            </span>
          </div>
        </div>


        <div className={styles.right}>
          <p className={styles.hadding5}>Signup</p>
          <form onSubmit={handleSubmit}>
            <p className={styles.para}>Already have an account? <strong><a href="/Login">Login Directly</a></strong></p>
            <div className={styles.inputs}>

              <label htmlFor='name' className={styles.lab}>Name</label>
              <input onChange={onchange} name="name" value={name} type="text" placeholder="Enter your name" />

              <label htmlFor='phone' className={styles.lab}>Mobile Number</label>
              <input onChange={onchange} name="phone" value={phone} type="text" placeholder="Enter your Mobile Number" />

              <label htmlFor='email' className={styles.lab}>Email</label>
              <input onChange={onchange} name="email" value={email} type="text" placeholder="Email" />
              <br></br>

              <label htmlFor='password' className={styles.lab}>Password</label>
              <input onChange={onchange} name="password" value={password} type="password" placeholder="Password" />
            </div>

            <br></br>


            <br></br>
            <button>Signup</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Signup
