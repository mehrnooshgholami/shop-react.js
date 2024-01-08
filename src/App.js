
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import '../src/lib/owlcarousel/assets/owl.carousel.min.css';
import { Landing } from './Landing';
import { useState } from 'react';
import { admins, data, users } from './data/data';

function App() {
  const [datas,setdata] = useState([...data])
  const [admin,setadmin] = useState(admins)
  const [user,setUser] = useState(users)
  return (

      <>
        <Landing user={user} setUser={setUser} datas={datas} setdata={setdata} admin={admin}></Landing>
      </>

  );
}

export default App;
