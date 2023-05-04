import React, { useState } from 'react';
import styles from '../styles/StyleForgot.module.css';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [npassword, setNpassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [user, setUser] = useState(false)

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    else if (e.target.name == "answer") {
      setAnswer(e.target.value);
    }
    else if (e.target.name == 'npassword') {
      setNpassword(e.target.value)
    }
    else if (e.target.name == 'cpassword') {
      setCpassword(e.target.value)
    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const data = { email };
    const res = await fetch(`http://localhost:3000/api/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    // console.log(response.email)


    if (response.success) {
      toast.success('User found plz answer the security question.', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setUser(true)
      setEmail(response.email)
    } else {
      toast.error("User not found plz check weather the email is correct", {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };


  const handlePupdate = async (e) => {
    e.preventDefault();
    if(cpassword==npassword){
    const data = { email,npassword,answer};
    const res = await fetch(`http://localhost:3000/api/resetPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
  
  

    if (response.success) {
      toast.success('Password matched successfully.', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(() => {
        
        router.push('http://localhost:3000/Login')
      }, 800);
    } else {
      toast.error("Answer did't matched", {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }
  else{
    toast.error("Password and New Password didn't matched", {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
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
        <div>
          <p className={styles.hadding5}>Forgot Password</p>
          {/* <form onSubmit={handleSubmit}> */}
          {!user && <><p className={styles.para}>Enter your registered email address below and we will send you a link to reset your password.</p>
            <div className={styles.inputs}>
              <label htmlFor='email' className={styles.lab}>Email</label>
              <input onChange={handleChange} name="email" value={email} type="text" placeholder="Please enter your email" />
            </div>
            <br></br>
            <div className={styles.buttons}>
              <button onClick={handleSubmit}>Check Email</button>
            </div>
          </>}
          {user && <><p className={styles.para}>Enter your registered email address below and we will send you a link to reset your password.</p>
            <div className={styles.inputs}>
              <label htmlFor='answer' className={styles.lab}>What is your favourite food</label>
              <input onChange={handleChange} name="answer" value={answer} type="text" placeholder="Please enter answer case sensitive" />
            <label htmlFor='npassword' className={styles.lab}>New Password</label>
            <input onChange={handleChange} name="npassword" value={npassword} type="password" placeholder="Enter new password" />
            <label htmlFor='cpassword' className={styles.lab}>Confirm New Password</label>
            <input onChange={handleChange} name="cpassword" value={cpassword} type="password" placeholder="Confirm new password" />
        
            </div>
            <br></br>
            <div className={styles.buttons}>
              <button onClick={handlePupdate}>Update Password</button>
            </div>
          </>}
          {/* </form> */}
        </div>
      </div>
    </div>
  );


}
export default ForgotPassword