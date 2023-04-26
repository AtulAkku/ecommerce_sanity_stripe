import React from 'react'
import styles from '../styles/styleabout.module.css'

const About = () => {
  return (
    <>
    <div className={styles.body}>
    <div className={styles.section}>
    <div className = {styles.image}>
       <img src="https://i.pinimg.com/564x/c0/f1/aa/c0f1aae48bcef97345ee27646545a96f.jpg"/>
    </div>

    <div className = {styles.content}>
        <h2>About Us</h2>
        <span></span>
        <p>SOS (Sports Out Studios), commonly known as SOS, is a French multinational holding and conglomerate specializing in luxury goods, headquartered in Paris.The company was formed in 1987 through the merger of fashion house Louis Vuitton (founded in 1854) with Moët Hennessy, which was established following the 1971 merger between the champagne producer Moët & Chandon (founded in 1743) and the cognac producer Hennessy (founded in 1765).In 2021, with a valuation of $329 billion, SOS became the most valuable company around the globe </p>
        <ul className = {styles.links}>
            <div className = {styles.verticalline}></div>
            <li><a href = "#">contact</a></li>
        </ul>
        <ul className = {styles.icons}>
            <li>
                <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
                <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
                <i className="fa-brands fa-github"></i>
            </li>
        </ul>
    </div>
</div><br></br><br></br>
</div>

</>
  )
}

export default About