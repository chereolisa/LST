import { useState } from 'react';
import styles from './Navbar.module.css';



function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
    <div className={styles.container}>
        <div className={styles.navbar}>

            <div className={styles.contactInfo}>
                <span><i className="fa fa-phone" style={{color: "rgba(255, 255, 255, 1)"}}></i>&nbsp;&nbsp;(225) 555-0118</span>
                <span><i className="far fa-envelope" style={{color: "rgba(255, 255, 255, 1)", fontWeight: "0"}}></i>&nbsp;&nbsp;michelle.rivera@example.com</span>
            </div>

            <div className={styles.discountAd}>
                <p>Follow Us  and get a chance to win 80% off</p>
            </div>

            <div className={styles.socials}>
                <p>Follow Us &nbsp;:</p>
                <i className="fab fa-instagram" style={{color: "rgba(255, 255, 255, 1)"}}></i>
                <i className="fab fa-youtube" style={{color: "rgba(255, 255, 255, 1)"}}></i>
                <i className="fab fa-facebook-f" style={{color: "rgba(255, 255, 255, 1)"}}></i>
                <i className="fab fa-twitter" style={{color: "rgba(255, 255, 255, 1)"}}></i>
            </div>

        </div>

        <div className={styles.subNavbar}>

            <div className={styles.brand}>
                
                <h1>Bandage</h1>

                <ul className={`${styles.navbarList} ${isMenuOpen ? styles.active : ''}`}>
                    <li className={styles.navbarItem}>Home</li>
                    <li className={styles.navbarItem}>
                        <span className={styles.shop}>Shop</span>&nbsp;
                        <i className="fas fa-chevron-down" style={{color: "rgba(37, 43, 66, 1)"}}></i>
                    </li>
                    <li className={styles.navbarItem}>About</li>
                    <li className={styles.navbarItem}>Blog</li>
                    <li className={styles.navbarItem}>Contact</li>
                    <li className={styles.navbarItem}>Pages</li>
                </ul>
            </div>

            <div className={styles.searchBar}>
                <h6><i className="far fa-user" style={{color: "rgba(35, 166, 240, 1)"}}></i>&nbsp;&nbsp;Login / Register</h6>
                <i className="fas fa-search" style={{color: "rgba(35, 166, 240, 1)"}}></i>
                <i className="fas fa-shopping-cart" style={{color: "rgba(35, 166, 240, 1)"}}></i>
                    <span className={styles.count}>1</span>
                <i className="far fa-heart" style={{color: "rgba(35, 166, 240, 1)"}}></i>
                    <span className={styles.count}>1</span>
                
                <div className={styles.hamburger} onClick={toggleMenu}>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            </div>

        </div>
        
    </div>  
    )
}

export default Navbar;