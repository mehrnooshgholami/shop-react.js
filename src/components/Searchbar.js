import React , {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Searchbar = ({setfilteredproducts,searchQuery,setsearchQuery,datas}) => {
const [login,setlogin] = useState(JSON.parse(localStorage.getItem('user')))
const users = useSelector(store=>store.userState)

useEffect(()=>{
    const filtered = datas.filter((item)=>item.productName.toLowerCase().includes(searchQuery.toLowerCase()))
    setfilteredproducts(filtered)
},[searchQuery,datas]
)
if (login) {
const user = users.filter(i=>i.userId===login.userId)
const cart = user[0].cart
    return(
        <div className="container-fluid" style={{top:"0",zIndex:"100",position:"sticky"}}>
           <div style={{height:"auto",backgroundColor:"#ffffff"}}>
           <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a href="" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span
                            className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for products" onChange={(e)=>{setsearchQuery(e.target.value)}}/>
                            <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                            </div>

                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-6 text-right">
                    <NavLink to="/login/userpanel/cart" className="btn border">
                        <i className="fas fa-shopping-cart text-primary"></i>
                        <span className="badge">{cart.length}</span>
                    </NavLink>
                </div>
            </div>
           </div>
        </div>
    )
}else{
    return(
        <div className="container-fluid" style={{top:"0",zIndex:"100",position:"sticky"}}>
           <div style={{height:"auto",backgroundColor:"#ffffff"}}>
           <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a href="" className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span
                            className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for products"/>
                            <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
           </div>
        </div>)
}

}
export default Searchbar