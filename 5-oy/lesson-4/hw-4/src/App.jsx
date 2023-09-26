
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Header from "./components/Header"
import Details from './pages/Details'

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="/product" element={ <Product/>} />
    <Route path="/product/:productId" element={ <Details/>} />
    </Routes>
    </>
  )
}

export default App
