import React from 'react'
import Footer from './Footer'
import Nav from './nav'

export const Layout = ({children}) => {
    return (
        <div>
        <Nav/>
        {children}
        <Footer></Footer>
        </div>
    )
}