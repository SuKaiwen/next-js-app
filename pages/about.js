import styles from '../styles/Layout.module.css'
import aboutus from '../public/images/aboutus.jpg';
import Image from 'next/image';

const about = () => {
    return (
        <div className = {`${styles.container} ${styles.white}`}>
            <Image src = {aboutus} alt = "" />
            <div className = {styles.textBox}>
                <h1>About Us</h1>
                <p>AirCnC was born in 2007 when two Hosts welcomed three guests to their San Francisco home, and has since grown to 4 million Hosts who have welcomed more than 1 billion guest arrivals in almost every country across the globe. Every day, Hosts offer unique stays and one-of-a-kind activities that make it possible for guests to experience the world in a more authentic, connected way.</p>
            </div>
            <br />
            <div className = {styles.gridBox}>
                <h1>What we are proud of</h1>
                <br />
                <div className = {styles.grid}>
                    <div className = {styles.card}>
                        <h1>5.6M+</h1>
                        <div className = {styles.smallText}>
                            <p>Customers World Wide</p>
                            <p>As of June 2021</p>
                        </div>
                    </div>
                    <div className = {styles.card}>
                        <h1>100K+</h1>
                        <div className = {styles.smallText}>
                            <p>AirCnC Listings</p>
                            <p>As of June 2021</p>
                        </div>
                    </div>
                    <div className = {styles.card}>
                        <h1>220+</h1>
                        <div className = {styles.smallText}>
                            <p>Countries and Regions</p>
                            <p>As of June 2021</p>
                        </div>
                    </div>
                    <div className = {styles.card}>
                        <h1>2B+</h1>
                        <div className = {styles.smallText}>
                            <p>Guests and Bookings</p>
                            <p>As of June 2021</p>
                        </div>
                    </div>
                    <div className = {styles.card}>
                        <h1>1.1B+</h1>
                        <div className = {styles.smallText}>
                            <p>Total Earned by Hosts</p>
                            <p>As of June 2021</p>
                        </div>
                    </div>
                    <div className = {styles.card}>
                        <h1>4M+</h1>
                        <div className = {styles.smallText}>
                            <p>Total Hosts</p>
                            <p>As of June 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about;