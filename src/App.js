import 'devextreme/dist/css/dx.light.css';

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import '../src/lib/owlcarousel/assets/owl.carousel.min.css';
import {BrowserRouter , Router, Route, Link, NavLink, Switch, Redirect, Prompt} from 'react-router-dom';
import { Landing } from './Landing';
import { useState } from 'react';
import { admins, data, users } from './data/data';
import { Cart } from './components/Cart';
import AdminForm from './components/admin/AdminForm';
import {AdminPanel} from './components/admin/AdminPanel';
import {Add} from './components/admin/Add';
import Edit from './components/admin/Edit';
import Login from './components/login/Login';
import { UserPanel } from './components/login/PanelUser';
import {routes} from "./routes";import {generateAppRoutes} from "./navigation/utils";
import Page from "./navigation/Page";
import {Header} from "./components/header";

function App() {
  const [datas,setdata] = useState([...data])
  const [aut, setAut] = useState(false)
  const [autUser, setAutUser] = useState(false)
  const [adding, setAdding] = useState(false)
  const [productitem, setproductitem] = useState([])
  const [editing, setEditing] = useState(false)
  const [paneladminshow, setpaneladminshow] = useState(false)
  const [paneluser, setPaneluser] = useState(false)
  const[formLoginShow,setFormLoginShow] =useState(false)
  const [formRegisterShow, setFormRegisterShow] = useState(false)
  const [loggedin, setloggedin] = useState([])
  const appRoutes = generateAppRoutes(routes);

  return (

<>
<BrowserRouter basename={process.env.PUBLIC_URL}>
   <div>
       <Header appRoutes={appRoutes}/>
       <Switch>
           {appRoutes.map(item => (
               <Route exact key={item.path} path={item.path}>
                   <Page item={item} datas={datas} setAdding={setAdding} productitem={productitem} setproductitem={setproductitem}/>
               </Route>
           ))}
       </Switch>
   </div>
</BrowserRouter>
</>

  );
}

export default App;


