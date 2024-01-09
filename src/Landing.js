import React, { useState } from 'react'
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Benefit } from './components/benefit';
import { Items } from './components/items';
import { Sales } from './components/sales';
import { Trandys } from './components/Trandys';
import { SubscribeStart } from './components/SubscribeStart';
import { JustArrivedProducts } from './components/justArrivedProducts';
import { Ads } from './components/Ads';
import { Footer } from './components/Footer';
import AdminForm from './components/admin/AdminForm';
import Login from './components/login/Login';
import { Cart } from './components/Cart';
import Searchbar from './components/Searchbar';




export const Landing = ({ datas , admin,setdata,user,setUser}) => {

  const [formadminshow,setformadminshow]=useState(false)
  const [paneladminshow,setpaneladminshow]=useState(false)
  const [formLoginShow,setFormLoginShow ] = useState(false)
  const [cart,setCart]=useState(false)


  return (
  

      <>
        <Searchbar/>
        <Sidebar/>
        <Benefit/>
        <Items/>
        <Sales/>
        <Trandys datas={datas}/>
        <SubscribeStart/>
        <JustArrivedProducts datas={datas}/>
        <Ads/>
        <Footer/>

      </>

)
}
