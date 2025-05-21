import Furniture from './components/Furniture/Furniture'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import ProductList from './components/ProductList/ProductList'

const App: React.FC = () => {

  return (
    <div className="App">
        <Navbar />
        <Furniture />
        <ProductList />
    </div>
  )

}

export default App
