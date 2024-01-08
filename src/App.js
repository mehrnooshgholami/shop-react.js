
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { LandingPage, P1 } from './p1/landingPage';
import '../src/lib/owlcarousel/assets/owl.carousel.min.css';
import { Header } from './p1/header';
import { Sidebar } from './p1/sidebar';
import { Benefit } from './p1/benefit';
import { Items } from './p1/items';
import { Sales } from './p1/sales';
import { Trandys } from './components/Trandys';
import { SubscribeStart } from './components/SubscribeStart';
import { JustArrivedProducts } from './components/justArrivedProducts';
import { Ads } from './components/Ads';
import { Footer } from './components/Footer';

function App() {
  return (
    <div >
{/* <LandingPage></LandingPage> */}
<Header></Header>
<Sidebar></Sidebar>
<Benefit></Benefit>
<Items></Items>
<Sales></Sales>
<Trandys></Trandys>
<SubscribeStart></SubscribeStart>
<JustArrivedProducts></JustArrivedProducts>
<Ads></Ads>
<Footer></Footer>
    </div>
  );
}

export default App;
