import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '/components/Navbar/Navbar.jsx';
import Body from '/components/Body/Body.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Piggy App</title>
        <meta name="description" content="Save For December" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Body/>
    </div>
  )
}
