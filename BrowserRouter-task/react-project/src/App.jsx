import { Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import Products from './pages/Products'
import Users from './pages/Users'
import Post from './pages/Post'


const App=()=> {
  

  return (
    <div>
      <Header/>
   <Routes>

    <Route path='/' element={<Products/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/post' element={<Post/>}/>





   </Routes>
      
    </div>
  )
}

export default App
