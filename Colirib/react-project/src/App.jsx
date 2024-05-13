import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Basket from './pages/Basket'
import DetailPage from './pages/DetailPage'
import Add from './pages/Add'
import WishList from './pages/WishList'
import Header from './components/header/Header'
import Heading from './components/heading/Heading'

function App() {
  

  return (
    <>
    <Heading/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/detail' element={<DetailPage/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/wishlist' element={<WishList/>}/>

    </Routes>
      
    </>
  )
}

export default App
