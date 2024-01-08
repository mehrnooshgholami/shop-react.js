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


export const Landing = ({ datas , admin,setdata }) => {

  const [formadminshow,setformadminshow]=useState(false)
  const [paneladminshow,setpaneladminshow]=useState(false)
  return (
    <>
    {
      formadminshow? 
      <AdminForm formadminshow={formadminshow} admin={admin} datas={datas} setdata={setdata} paneladminshow={paneladminshow} setpaneladminshow={setpaneladminshow}/>
      :
      <>

      <Header formadminshow={formadminshow} setformadminshow={setformadminshow}></Header>
      <Sidebar></Sidebar>
      <Benefit></Benefit>
      <Items></Items>
      <Sales></Sales>
      <Trandys datas={datas}></Trandys>
      <SubscribeStart></SubscribeStart>
      <JustArrivedProducts datas={datas}></JustArrivedProducts>
      <Ads></Ads>
      <Footer></Footer>

      </>
    }
    </>
)
}
