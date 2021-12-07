import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import paris from '../public/images/paris.jpg';
import sydney from '../public/images/sydney.jpg';

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
        <h1>Explore | Places near you</h1>
        <div className = {styles.grid}>
          <div className = {styles.card}>
            <Image src={sydney} alt="" />
            <h1>pepe</h1>
          </div>
          <div className = {styles.card}>
            <Image src={sydney} alt="" />
            <h1>pepe</h1>
          </div>
          <div className = {styles.card}>
            <Image src={sydney} alt="" />
            <h1>pepe</h1>
          </div>
          <div className = {styles.card}>
            <Image src={sydney} alt="" />
            <h1>pepe</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
