import Furniture from './components/Furniture/Furniture'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import BestServices from './components/BestServices/BestServices'
import FeaturedPosts from './components/FeaturedPosts/FeaturedPosts'
import Reviews from './components/Reviews/Reviews'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {

  return (
    <div className="App">
        <Navbar />
        <Furniture />
        <ProductList />
        <BestServices />
        <FeaturedPosts />
        <Reviews />
        <Footer />
    </div>
  )

}

export default App
