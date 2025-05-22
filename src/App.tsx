import Furniture from './components/Furniture/Furniture'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import BestServices from './components/BestServices/BestServices'

const App: React.FC = () => {

  return (
    <div className="App">
        <Navbar />
        <Furniture />
        <ProductList />
        <BestServices />
    </div>
  )

}

export default App
