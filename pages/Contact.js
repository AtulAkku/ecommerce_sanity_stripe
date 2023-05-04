import React,{useState} from 'react'
import styles from '../styles/style1.module.css'
import {FaMapMarkerAlt, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contect = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")
  
  const onchange = (e) => {
    if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'message') {
      setmessage(e.target.value)
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

    const data = { name, email, message }
    const res = await fetch(`http://localhost:3000/api/contactus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json();
    setname("")
    setemail("")
    setmessage("")

    if (response.success) {
      toast.success('We got your message! Thankyou for your response', {
        position: "top-center",
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
    <>
    <ToastContainer
        position="top-center"
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
    <section className= {styles.outBox}>
    <img className='img' src="https://source.unsplash.com/random/1207x440/?sports, equipments" alt="bg"/>
    <div className={styles.container1}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <div className={`${styles.address} ${styles.details}`}>
              <i><FaMapMarkerAlt/></i>
              <div className={styles.topic}><b><i>Address</i></b></div>
              <div className={styles.textOne}><b>Global:</b> 22 Avenue Montaigne<br/>Paris, France</div>
              <div className={styles.textTwo}><b>Overseas:</b> SOS Tower<br/>19 East 57th Street<br/>New York, N.Y., U.S.</div>
            </div>
            <div className={`${styles.phone} ${styles.details}`}>
              <i><FaPhoneAlt/></i>
              <div className={styles.topic}><b><i>Phone</i></b></div>
              <div className={styles.textOne}>+0098 9893 5647</div>
              <div className={styles.textTwo}>+0096 3434 5678</div>
            </div>
            <div className={`${styles.email} ${styles.details}`}>
              <i><FaEnvelope/></i>
              <div className={styles.topic}><b><i>Email</i></b></div>
              <div className={styles.textOne}>sportsoutstudios@gmail.com</div>
              <div className={styles.textTwo}>info.sportsoutstudios@gmail.com</div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.topicText}>Send us a message</div>
            <p>Your data are collected by SOS, the data controller, for the purpose of processing your request and to respond to your questions. Your data will be processed in accordance with our Personal Data Protection Policy. You may at any time exercise your rights of access, correction and deletion of your personal data by using the contact form.</p>
          <form>
            <div className={styles.inputBox}>
              <label htmlFor='name'></label>
              <input onChange={onchange} name="name" value={name} type="text" placeholder="Enter your name"/>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor='email'></label>
              <input onChange={onchange} name="email" value={email} type="text" placeholder="Enter your email"/>
            </div>
            <div className={`${styles.inputBox} ${styles.messageBox}`}>
                <label htmlFor='message'></label>
                <input onChange={onchange} name="message" value={message} type="text" placeholder="Enter your message"/>
            </div>
            <div className={styles.button}>
              <input onClick={handleSubmit} type="button" value="Send Now" />
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
    
  
    </>

  )
}

export default Contect