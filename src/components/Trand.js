import React , {useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { add_cart} from '../state-management/action/UsersAction'
import { NavLink } from 'react-router-dom'
export const Trand = () => {
  const datas = useSelector(store => store.ProuductState)
  const users = useSelector(store => store.userState)
  const dispatch = useDispatch()
  const [login,setlogin] = useState(JSON.parse(localStorage.getItem('user')))
  if (login) {
    const user = users.filter(i=>i.userId===login.userId)
    const userId = user[0].userId
    return (
      <>
        {
        datas.map((item)=>(
              <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                  <div class="card product-item border-0 mb-4">
                      <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <button onClick={a=>console.log(user)}>log</button>
                          <img class="img-fluid w-100" src={item.productimg} alt=""></img>
                      </div>
                      <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                          <h6 class="text-truncate mb-3">{item.productName}</h6>
                          <div class="d-flex justify-content-center">
                              <h6>{item.productPrice}</h6><h6 class="text-muted ml-2"><del>{item.productPrice}</del></h6>
                          </div>
                      </div>
                      <div class="card-footer d-flex justify-content-between bg-light border">
                          <NavLink to={"/"+item.productType+"/"+item.productName} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</NavLink>
                          <a onClick={a=>{
                              dispatch(add_cart(item , userId))
                            }} class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                      </div>
                  </div>
              </div>
          )
  
          )
        }
      </>
    )
  }else{
    return(<>
      {
      datas.map((item)=>(
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="card product-item border-0 mb-4">
                    <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img class="img-fluid w-100" src={item.productimg} alt=""></img>
                    </div>
                    <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 class="text-truncate mb-3">{item.productName}</h6>
                        <div class="d-flex justify-content-center">
                            <h6>{item.productPrice}</h6><h6 class="text-muted ml-2"><del>{item.productPrice}</del></h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <NavLink to={"/"+item.productType+"/"+item.productName} class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</NavLink>
                        <NavLink to='login'>Please login</NavLink>
                    </div>
                </div>
            </div>
        )

        )
      }
    </>)
  }
   
  
}
