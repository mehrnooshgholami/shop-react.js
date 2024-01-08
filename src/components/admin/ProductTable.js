import React from 'react'
import Swal from 'sweetalert2'

const ProductTable = ({setproductitem , setEditing , setAdding , setpaneladminshow , datas , setdata}) => {
    const remove = (item) =>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
            setdata(datas.filter((i)=>i.productId !== item.productId))
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });
      }
  return (
    <>

    <div class="d-flex justify-content-center container-fluid pt-5">
    <div class="row">
        <div class=" table-responsive mb-5">

        <div class="input-group-append" style={{float:"right"}}>
            <button class="btn btn-primary" onClick={t=>setpaneladminshow(false)}>
                log out
            </button>
        </div>

        <div class="input-group-append">
            <button class="btn btn-primary" onClick={w=>setAdding(true)}>
                <i className='fa fa-plus'></i>
            </button>
        </div>


            <table class="table table-bordered text-center mb-0">
                <thead class="bg-secondary text-dark">
                    <tr>
                        <th>Products</th>
                        <th>name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody class="align-middle">
                    {
                        datas.map((item)=>(
                            <tr>
                                <td class="align-middle">
                                    <img src={item.productimg} style={{width:"50px",height:"50px"}} alt="" /> 
                                </td>

                                <td class="align-middle" >{item.productName}</td>

                                <td class="align-middle" >{item.productType}</td>

                                <td class="align-middle" >{item.productPrice}</td>
                                
                                <td class="align-middle" >
                                    {item.quantity}
                                </td>

                                <td class="align-middle">
                                    <button onClick={a=>{setproductitem([item]);setEditing(true)}} class="btn btn-sm btn-primary">
                                        <i class="fa fa-edit"></i>
                                    </button>
                                </td>
                                
                                <td class="align-middle">
                                    <button class="btn btn-sm btn-primary" onClick={r=>remove(item)}>
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
        

</>
  )
}

export default ProductTable
