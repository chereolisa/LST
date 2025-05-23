import styles from './Footer.module.css'


function Footer() {

    return(
        <div className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.brand}>
                    <h3 className={styles.h3}>Bandage</h3>
                </div>
                <div className={styles.media}>
                    <i className="fab fa-facebook-f" style={{color: "rgba(35, 166, 240, 1)", fontSize: "1.5rem"}}></i>
                    <i className="fab fa-instagram" style={{color: "rgba(35, 166, 240, 1)", fontSize: "1.5rem"}}></i>
                    <i className="fab fa-twitter" style={{color: "rgba(35, 166, 240, 1)", fontSize: "1.5rem"}}></i>
                </div>
            </div>

            <div className={styles.info}>
                <ul className={styles.ul}>
                    <label className={styles.label}>Company Info</label>
                    <li className={styles.li}>About Us</li>
                    <li className={styles.li}>Carrier</li>
                    <li className={styles.li}>We are Hiring</li>
                    <li className={styles.li}>Blog</li>
                </ul>

                <ul className={styles.ul}>
                    <label className={styles.label}>Legal</label>
                    <li className={styles.li}>About Us</li>
                    <li className={styles.li}>Carrier</li>
                    <li className={styles.li}>We are Hiring</li>
                    <li className={styles.li}>Blog</li>
                </ul>

                <ul className={styles.ul}>
                    <label className={styles.label}>Features</label>
                    <li className={styles.li}>Business Marketing</li>
                    <li className={styles.li}>User Analytic</li>
                    <li className={styles.li}>Live Chat</li>
                    <li className={styles.li}>Unlimited Support</li>
                </ul>

                <ul className={styles.ul}>
                    <label className={styles.label}>Resources</label>
                    <li className={styles.li}>IOS & Android</li>
                    <li className={styles.li}>Watch a Demo</li>
                    <li className={styles.li}>Customers</li>
                    <li className={styles.li}>API</li>
                </ul>

                <label className={styles.label}>Get In Touch
                    <input type="text" placeholder="Enter your email" className={styles.input} />
                    <button className={styles.button}>Subscribe</button>
                    <p className={styles.p}>Lore imp sum dolor Amit</p>
                </label>
            </div>
            
        </div>
    )

}

export default Footer