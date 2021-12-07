import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import paris from '../public/images/paris.jpg';
import sydney from '../public/images/sydney.jpg';
import brisbane from '../public/images/brisbane.jpg';
import hongkong from '../public/images/hongkong.jpg';
import tokyo from '../public/images/tokyo.jpg';
import canyon from '../public/images/canyon.jpg';
import buckingham from '../public/images/buckingham.jpg';
import host from '../public/images/host.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aircnc | Home</title>
      </Head>
      <div className = {styles.container}>
        <h1>AirCnC | Home</h1>
        <div className={styles.mainImage}>
          <Image src={paris} alt="" />
          <div className={styles.centered}>
            <h1>Not sure where to go? Perfect!</h1>
            <button className={styles.button}>Explore</button>
          </div>  
        </div>
      </div>
      <div className = {styles.containerWhite}>
        <h1>Explore | Discover new destinations</h1>
        <div className = {styles.grid}>
          <div className = {styles.card}>
            <Image src={sydney} alt="" />
            <div className = {styles.cardText}>
              <h2>Syndey</h2>
              <h3>Australia</h3>
              <p>10 km away</p>
            </div>
          </div>
          <div className = {styles.card}>
            <Image src={brisbane} alt="" />
            <div className = {styles.cardText}>
              <h2>Brisbane</h2>
              <h3>Australia</h3>
              <p>452 km away</p>
            </div>
          </div>
          <div className = {styles.card}>
            <Image src={hongkong} alt="" />
            <div className = {styles.cardText}>
              <h2>Hong Kong</h2>
              <h3>Hong Kong</h3>
              <p>4690 km away</p>
            </div>
          </div>
          <div className = {styles.card}>
            <Image src={tokyo} alt="" />
            <div className = {styles.cardText}>
              <h2>Tokyo</h2>
              <h3>Japan</h3>
              <p>6942 km away</p>
            </div>
          </div>
        </div>
        <h1>Recommendations | Uncover new experiences</h1>
        <div className = {styles.grid}>
          <div className = {styles.experienceCard}>
            <div className = {styles.box}>
              <Image src={canyon} alt="" />
              <div className = {styles.text}>
                <h1>Grand Canyon</h1>
                <h2>Arizona, USA</h2>
                <hr />
                <br />
                <button className = {styles.button}>View more</button>
              </div>
            </div>
          </div>
          <div className = {styles.experienceCard}>
            <div className = {styles.box}>
                <Image src={buckingham} alt="" />
                <div className = {styles.text}>
                  <h1>Buckingham Palace</h1>
                  <h2>London, UK</h2>
                  <hr />
                  <br />
                  <button className = {styles.button}>View more</button>
                </div>
              </div>
          </div>
        </div>
        <div className = {styles.hostCard}>
          <div className = {styles.box}>
            <Image src={host} alt="" />
              <div>
                  <div className = {styles.text}>
                    <h1>Thinking about hosting?</h1>
                    <h3>Flick us a message!</h3>
                    <hr />
                    <br />
                    <button className = {styles.button}>Ask</button>
                  </div>
              </div> 
            </div> 
        </div>
        
      </div>
    </div>
  )
}
