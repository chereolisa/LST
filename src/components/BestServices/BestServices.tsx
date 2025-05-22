import styles from './BestServices.module.css';


function BestServices() {

    return(
        <div className={styles.container}>
            <h4 className={styles.h4}>Featured Products</h4>
            <h3 className={styles.h3}>BEST SERVICES</h3>
            <p className={styles.p}>Problems trying to resolve the conflict between</p>

            <div className={styles.services}>
                <div className={styles.easy}>
                    <img src='/easy-win.svg' alt='easy-win ' className={styles.pic1} />
                    <h3>Easy Wins</h3>
                    <p>Get your best looking smile now!</p>
                </div>

                <div className={styles.concrete}>
                    <img src='/concrete.svg' alt='concrete' className={styles.pic2} />
                    <h3>Concrete</h3>
                    <p>Defalcate is most focused in<br />
                        helping you discover your most<br /> 
                        beautiful smile
                    </p>
                </div>

                <div className={styles.growth}>
                    <img src='/hack-growth.svg' alt='growth' className={styles.pic3} />
                    <h3>Hack Growth</h3>
                    <p>Overcame any hurdle or any<br />
                        other problem.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BestServices;