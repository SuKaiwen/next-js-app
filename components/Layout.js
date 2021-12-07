import React from 'react';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Head from "next/head";

function Layout({children}) {
    return (
        <div className = {styles.mainText}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"/>
            </Head>
            <Nav />
            <div className = {styles.container}>
                <main className = {styles.main}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;