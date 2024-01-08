
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import '../src/lib/owlcarousel/assets/owl.carousel.min.css';
import { Landing } from './Landing';
import { useState } from 'react';
import { admins, data } from './data/data';

function App() {
  const [datas,setdata] = useState(data)
  const [admin,setadmin] = useState(admins)
  return (

      <>
<Landing datas={datas} setdata={setdata} admin={admin}></Landing>
      </>

  );
}

export default App;
