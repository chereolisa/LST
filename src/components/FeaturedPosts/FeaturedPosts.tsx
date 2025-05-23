import styles from './FeaturedPosts.module.css';

function FeaturedPosts() {

return (
    <>
        <h6>Practice Advice</h6>
        <h2>Featured Posts</h2>

        <div className={styles.featuredPosts}>
            <img src='/post1.svg' alt='featured post 1' />
            <img src='/post2.svg' alt='featured post 2' />
            <img src='/post3.svg' alt='featured post 3' />
        </div>
    </>
)

}

export default FeaturedPosts;