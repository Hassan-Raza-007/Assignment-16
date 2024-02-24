import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product_Detail from '../pages/Product_Detail'
import Card from '../components/Card'
import SignIn from '../pages/Signin'
import SignUp from '../pages/Signup'

const Router = () => {
    return (
        <Routes>
            <Route path='' element={<Home />} />
            {/* <PrivateRoute path='/Product_Detail' element={<Product_Detail />} /> */}
            <Route path='/login' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    )
}

export default Router