import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to my News</title>
      </Head>
      <div className ={styles.container}>
        <h1>Next JS APP</h1>
      </div>
    </div>
  )
}
