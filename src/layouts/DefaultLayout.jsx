import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Home from '../components/Home'
const DefaultLayout = () => {
    return (
        <div className="container">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default DefaultLayout