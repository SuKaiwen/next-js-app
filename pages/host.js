import React from 'react';
import styles from '../styles/Layout.module.css';
import host2 from '../public/images/host2.jpg';
import Image from 'next/image';

function host(props) {
    return (
        <div className = {`${styles.container} ${styles.white}`}>
            <div className = {`${styles.hostGrid} ${styles.hostText}`}>
                <div className = {styles.hostColumn}>
                    <h1>Hosting is what makes us, us</h1>
                    <button className = {`${styles.button} ${styles.buttonVar2}`}>Try host</button>
                </div>
                <div className = {styles.hostColumn}>
                    <div className = {styles.hostImage}>
                        <Image src = {host2} alt = "" />
                    </div>
                </div>
            </div>
            
            <div className = {styles.textBox}>
                <h1>Hosting since 2007</h1>
                <p>AirCnC was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to 4 million Hosts who have welcomed more than 1 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and one-of-a-kind activities that make it possible for guests to experience the world in a more authentic, connected way.</p>
            </div>
            <br />
            <div className = {styles.gridBox}>
                <h1>Tips for hosting beginners</h1>
                <br />
                <div className = {styles.grid}>
                    <div className = {styles.card}>
                        <h2>Personal tips and guidance</h2>
                        <div className = {styles.hostText}>
                            <p>We’ve matched you with an experienced Superhost to answer all of your questions, whenever works best for you.</p>
                        </div>
                    </div>
                    <div className = {styles.card}>
                        <h2>Hands-on help listing your place</h2>
                        <div className = {styles.hostText}>
                            <p>Your Superhost will help you create your listing and share advice for taking photos, describing your space and more.</p>
                        </div>
                    </div>
                    <div className = {styles.card}>
                        <h2>Prep for your first guest</h2>
                        <div className = {styles.hostText}>
                            <p>Countries and Regions</p>
                            <p>As of June 2021</p>
                        </div>
                    </div>
                    <div className = {styles.card}>
                        <h1>4M+</h1>
                        <div className = {styles.hostText}>
                            <p>Total Hosts</p>
                            <p>As of June 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default host;