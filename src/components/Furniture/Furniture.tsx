import styles from './Furniture.module.css';

function Furniture() {

 return (
  <div className={styles.container}>

    <div className={styles.pic1}>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet="/furniture1-mobile.svg"
        />
        <img
          src="/furniture1.svg"
          alt="Furniture 1"
          className={styles.picF1}
        />
      </picture>
    </div>

    <div className={styles.pic2}>
        <picture>
            <source
            media="(max-width: 768px)"
            srcSet="/furniture2-mobile.svg"
            />
            <img
            src="/furniture2.svg"
            alt="Furniture 2"
            className={styles.picF1}
            />
        </picture>
      <img src="/furniture3.svg" alt="Furniture 3" className={styles.picF3} />
      <img src="/furniture4.svg" alt="Furniture 4" className={styles.picF4} />
    </div>

  </div>
);

}

export default Furniture;