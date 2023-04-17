
import React, { Fragment } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'

const Layout = () => {
  const userNavLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
  
    {
      path: "/faq",
      display: "FAQ",
    },
  ];
  const adminNavLinks = [
    {
      path: "/users",
      display: "Users",
    },
    {
      path: "/orders",
      display: "Orders",
    },
  
    {
      path: "/stores",
      display: "Stores",
    },
  ];
  return <Fragment>
    <Header navLinks={adminNavLinks}/>
    <div>
        <Routers/>
    </div>
    <Footer/>
  </Fragment>
}

export default Layout