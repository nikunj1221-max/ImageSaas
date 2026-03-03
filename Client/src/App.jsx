import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Footer from './components/Footer'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Home from './pages/home'
import { Navbar } from './components/Navbar'
import Login from './components/Login'
// import { fromJSON } from 'postcss'

const App = () => {
  return (
    <div  className="px-4  sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50"  >

   <Navbar/>
   <Login/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
         <Route path='/result' element={ <Result/>} /> 
          <Route path='/buy' element={<BuyCredit/>} /> 
      </Routes>
     <Footer/>

     
      
    </div>
  )
}

export default App