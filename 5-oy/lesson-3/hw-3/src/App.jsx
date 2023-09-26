import './App.css'
import Header from './components/Header' 
import Footer from './components/Footer' 
import Home from './pages/Home' 
import About from './pages/About'
import Features from './pages/Features'
import Blog from './pages/Blog'
import Download from './pages/Download'
import Screenshot from './pages/Screenshot'
import { Routes,Route } from 'react-router-dom'


function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/features' element={<Features/>}/>      
      <Route  path='/blog' element={<Blog/>}/>      
      <Route  path='/screenshot' element={<Screenshot/>}/>      
      <Route  path='/download' element={<Download/>}/>      
      </ Routes>
      <Footer/>

    </>
    
  )
}

export default App
