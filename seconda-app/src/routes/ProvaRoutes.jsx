import React from 'react'
import About from './About'
import Home from './Home'
import Profiles from './Profiles'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link, useRoutes } from 'react-router-dom'
import SingleProfile from './SingleProfile'
import ErrorPage from './ErrorPage'
import MyProfile from './MyProfile'
import { routes } from './route'

const AppRoutes=()=>{
    const elements=useRoutes(routes)
    return elements
};

const ProvaRoutes = () => {

  return (
    <div>
        <BrowserRouter>
        <nav className="navbar">
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
            <Link to="/profiles"> Profiles </Link>
         </nav>
        <hr></hr>
        <AppRoutes></AppRoutes>
            {/* <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/profiles/" element={<Profiles></Profiles>}>  
                    <Route path=":id" element={<SingleProfile></SingleProfile>}></Route>
                    <Route path="me" element={<MyProfile></MyProfile>}></Route>
                </Route>

                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Routes>    */}
        </BrowserRouter>
    </div>
  )
}

export default ProvaRoutes