import styles from './Reviews.module.css';

function Reviews() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.review}>
                    <h3 className={styles.h3}>What they say about us</h3>
                    <img src='/profile-icon.svg' alt='profile icon' />
                    <img src='/stars.svg' alt='rating' />
                    <p className={styles.p}>Slate helps you see how many more days you need to work to<br />
                    reach your financial goal.</p>
                    <h4 className={styles.name}>Regina Miles</h4>
                    <p className={styles.position}>Designer</p>
                </div>
                <div className={styles.gallery}>
                    <img src="/gallery.svg" alt="gallery" />
                </div>
            </div>
            <div className={styles.experience}>
                <picture>
                    <source
                    media="(max-width: 768px)"
                    srcSet="/experience-mobile.svg"
                    />
                    <img
                    src="/experience-pc.svg"
                    alt="Design experience"
                    className={styles.picXp}
                    />
                </picture>
            </div>
        </>
    )

}

export default Reviews;