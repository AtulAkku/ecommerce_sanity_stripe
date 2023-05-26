import React, { useState, useEffect } from 'react'
import styles from '../styles/profile.module.css'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [npassword, setNpassword] = useState("")
  const [cpassword, setCpassword] = useState("")
  const [address, setAddress] = useState("")
  const [pincode, setPincode] = useState("")
  const [name, setname] = useState("")
  const [phone, setphone] = useState("")
  const [user, setUser] = useState({ value: null })
  const router = useRouter()
  useEffect(() => {
    const user = localStorage.getItem('token')
    if (!user) {
      toast.success('Please Login First', {
        position: "top-center",
        autoClose: 900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push('/Login')
      }, 800);
    }
    if (user) {
      setUser(user)

      fetchData(user)
    }
  }, [router.query])

  const fetchData = async (token) => {
    let data = { token: token }
    const a = await fetch(`http://localhost:3000/api/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    let res = await a.json();
    setname(res.name)
    setAddress(res.address)
    setPincode(res.pincode)
    setphone(res.phone)
    setemail(res.email)
  }


  const onchange = (e) => {

    if (e.target.name == 'password') {
      setpassword(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'cpassword') {
      setCpassword(e.target.value)
    }
    else if (e.target.name == 'address') {
      setAddress(e.target.value)
    }
    else if (e.target.name == 'pincode') {
      setPincode(e.target.value)
    }
    else if (e.target.name == 'npassword') {
      setNpassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const phoneRegex = /^(\+?\d{1,3}[- ]?)?\d{10}$/;
    const pincodeRegex = /^(\+?\d{1,3}[- ]?)?\d{6}$/;
    const nameRegex = /^(?=.*[a-zA-Z]).{3,}$/;

    if (!nameRegex.test(name)) {
      toast.error('Name should be atleast of 3 characters', {
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

    if (!phoneRegex.test(phone)) {
      toast.error('Please enter a valid mobile number', {
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

    if (!pincodeRegex.test(pincode)) {
      toast.error('Please enter a valid pincode number', {
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

    const data = { token: user, name, phone, address, pincode }
    const res = await fetch(`http://localhost:3000/api/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json();


    if (response.success) {
      toast.success('Your account details have been', {
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

  const passwordReset = async () => {

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*()_+={}\[\]|\\;:'",.<>\/?~-]*$/;

    if (!passwordRegex.test(npassword)) {
      toast.error('Password must be at least 6 characters long and contain at least one digit, one lowercase letter, and one uppercase letter', {
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

    let res
    if (npassword == cpassword) {
      let data = { token: user, password, cpassword, npassword }
      console.log(data)
      const a = await fetch(`http://localhost:3000/api/updatepassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      res = await a.json();
    }
    else {
      res = { success: false }
    }

    if (res.success) {
      toast.success("Successfully updated your password", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setpassword('')
      setNpassword('')
      setCpassword('')
    }
    else {
      toast.error("Error updating password", {
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

    <div className={styles.container}>
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
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>

          <label htmlFor='name' className={styles.lab}>Name</label>
          <input onChange={onchange} name="name" value={name} type="text" placeholder="Enter your name" />

          <label htmlFor='email' className={styles.lab}>Email(can not be updated)</label>
          <input onChange={onchange} name="email" value={email} type="text" placeholder='Email' readOnly={true} />

          <label htmlFor='phone' className={styles.lab}>Mobile Number</label>
          <input onChange={onchange} name="phone" value={phone} type="text" placeholder="Enter your Mobile Number" />

          <label htmlFor='address' className={styles.lab}>Address</label>
          <input onChange={onchange} cols='30' rows='2' name="address" value={address} type="text" placeholder="Enter your Address" />

          <label htmlFor='pincode' className={styles.lab}>Pincode</label>
          <input onChange={onchange} name="pincode" value={pincode} type="text" placeholder="Enter Your Area Pin" />

          <br></br>
          <button>Update</button>
        </div>
      </form>
      <div className={styles.inputs}>
        <label htmlFor='password' className={styles.lab}>Old Password</label>
        <input onChange={onchange} name="password" value={password} type="password" placeholder="Enter old password" />
        <label htmlFor='npassword' className={styles.lab}>New Password</label>
        <input onChange={onchange} name="npassword" value={npassword} type="password" placeholder="Enter new password" />
        <label htmlFor='cpassword' className={styles.lab}>Confirm New Password</label>
        <input onChange={onchange} name="cpassword" value={cpassword} type="password" placeholder="Confirm new password" />
        <button onClick={passwordReset}>Reset Password</button>
      </div>
      <br></br>
      <br></br>
    </div>
  )
}

export default Profile