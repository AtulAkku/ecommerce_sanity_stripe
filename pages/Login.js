import React,{useState} from 'react'
import styles from '../styles/Style.module.css'
import { FaLinkedinIn, FaGoogle, FaFacebookF} from 'react-icons/fa';

const login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const onchange=(e)=>{
    if (e.target.name == 'email') {
        setemail(e.target.value)
      }
      else if (e.target.name == 'password') {
        setpassword(e.target.value)
      }
  }

    return (
        <div className={styles.body}>
            <div className={styles.boxform }>
                <div className={styles.left}>
                    <div className={styles.overlay}>
                        <p className={styles.hadding1}>Welcome to Sports Store</p>
                        <p>By logging in, you agree to SOS's Privacy Policy and Terms of Use</p>
                        <span>
                            <p>login with social media</p>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaFacebookF className="text-sm"/>
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaLinkedinIn className="text-sm"/>
                            </a>
                            <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                <FaGoogle className="text-sm"/>
                            </a>
                        </span>
                    </div>
                </div>


            <div className={styles.right}>
                    <h5>Login</h5>
                    <form action="#">
                        <p>Don't have an account? <strong><a href="/Signup">Create Your Account</a></strong> it takes less than a minute</p>
                        <div className={styles.inputs}>
                            <label htmlFor='email' className={styles.lable}>Email</label>
                            <input onChange={onchange} name="email" value={email} type="text" placeholder="Username"/>
                                <br></br>
                            <label htmlFor='password' className={styles.lable}>Password</label>
                                    <input onChange={onchange} name="password" value={password} type="password" placeholder="Password"/>
                                    </div>

                                    <br></br>


                                        <br></br>
                                        <div className={styles.buttons}>
                                            <button>Login</button>
                                            <button>Forgot password?</button>
                                            <a href="/Signup">Signu</a>
                                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default login