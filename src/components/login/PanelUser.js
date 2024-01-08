import React from 'react'

export const UserPanel = ({setPaneluser,setFormRegisterShow,setFormLoginShow,loggedin}) => {
  
  return (
    <>
{/* 

          <div>
            <div class="container-fluid">
            <div class="row bg-secondary py-2 px-xl-5">
                <div class="col-lg-6 d-none d-lg-block"> userPanel
                    <div class="d-inline-flex align-items-center">
                        <a class="text-dark" href="#" onClick={a=>{setFormLoginShow(false);setPaneluser(false);setFormRegisterShow(false)}}>Home</a>
                        <span class="text-muted px-2">|</span>
                        <a class="text-dark" href="#" onClick={a=>{setPaneluser(false);setFormRegisterShow(false)}}>log out</a>
                        <span class="text-muted px-2">|</span>
                    </div>
                </div>
    
              </div>
              <div class="row align-items-center py-3 px-xl-5">
                <div class="col-lg-3 d-none d-lg-block">
                    <a href="" class="text-decoration-none">
                        <h5 class="">Welcome to your Dashboard</h5>
                    </a>
                </div>
                </div>
              </div>
          </div>  
          <div>
          <div class="container-fluid mb-5">
            <div class="row border-top px-xl-5">
              <div class="col-lg-3 d-none d-lg-block">
                <nav class="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
                    <div class="navbar-nav w-100 overflow-hidden" style={{height: "410px"}}>
                        <a href="#" class="nav-item nav-link" >Your Information</a>
                        <a href="#" class="nav-item nav-link">Your Orders</a>
                    </div>
                  </nav>
              </div>
              <div className='col-lg-9 d-none d-lg-block'>
                <h1>
                    gdgf
                </h1>
              </div>
            </div>
          </div>
          </div> */}



        <div>
          <div class=" container-fluid bg-secondary py-2 px-xl-5">
            <div class="d-inline-flex align-items-center">
              <a class="text-dark" href="#" onClick={a=>{setFormLoginShow(false);setPaneluser(false);setFormRegisterShow(false)}}>Home</a>
              <span class="text-muted px-2">|</span>
              <a class="text-dark" href="#" onClick={a=>{setPaneluser(false);setFormRegisterShow(false)}}>log out</a>
              <span class="text-muted px-2">|</span>
              </div>
          </div>
        </div>

        <div>
          <h4 class="py-3">Welcome {loggedin.map((a)=>(<>{a.firstName}{" "}{a.lastName}</>))}</h4>
        </div>
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 border">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                <ul class="navbar-nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0 border-bottom">
                            <i class="fas fa-address-card"></i> <span class="ms-1 d-none d-sm-inline">Your Information</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fas fa-cart-arrow-down"></i> <span class="ms-1 d-none d-sm-inline">Your Orders</span>
                        </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


  


    </>

  )
}





