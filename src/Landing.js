import React, { useState } from 'react'
import { Sidebar } from './components/sidebar';
import { Benefit } from './components/benefit';
import { Items } from './components/items';
import { Sales } from './components/sales';
import { Trandys } from './components/Trandys';
import { Ads } from './components/Ads';
import { Footer } from './components/Footer';
import Searchbar from './components/Searchbar';
import { useSelector } from 'react-redux';




export const Landing = () => {
  const datas = useSelector(store => store.ProuductState)
  const [searchQuery,setsearchQuery]=useState('')
  const [filteredproducts,setfilteredproducts]=useState([])

  return (
  

      <>
        <Searchbar setfilteredproducts={setfilteredproducts} searchQuery={searchQuery} setsearchQuery={setsearchQuery} datas={datas}/>
        <Sidebar/>
        <Benefit/>
        {/* <Items/> */}
        <Sales/>
        <Trandys filteredproducts={filteredproducts} />
        <Ads/>
        <Footer/>

      </>

)
}
