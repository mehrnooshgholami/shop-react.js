import cat1 from "../img/cat-1.jpg";
import cat2 from "../img/cat-2.jpg";
import cat3 from "../img/cat-3.jpg";
import cat4 from "../img/cat-4.jpg";
import cat5 from "../img/cat-5.jpg";
import cat6 from "../img/cat-6.jpg";
import {Cart} from "../components/Cart"
import i1 from "../img/carousel-1.jpg"
import i2 from "../img/carousel-2.jpg"

const gallery = [
    i1,
    i2
    
  ];

const data =[
    {
        file:null,
        productId:1,
        productType:"men",
        productName:"kjb",
        productPrice:7,
        quantity:5,
    },
    {
      file:null,
      productId:1,
      productType:"women",
      productName:"cd",
      productPrice:12,
      quantity:7,
  },
]
const Pruduct = {
  'men':{
    title:'men dress',
    price:44
  },
  'wemen':{
    title:'wemen dress',
    price:100
  }
}



const categorys =[
    {
        categoryName:"Men's dresses",
        categoryImg:cat1
    },
    {
        categoryName:"Women's dresses",
        categoryImg:cat2
    },
    {
        categoryName:"Baby's dresses",
        categoryImg:cat3
    },
    {
        categoryName:"Accerssoriess",
        categoryImg:cat4
    },
    {
        categoryName:"Bags",
        categoryImg:cat5
    },
    {
        categoryName:"Shoes",
        categoryImg:cat6
    },
]


const admins = [{
    username:"aaa",
    email:"a@a.com",
    password:"123asdASD"
}]
 const users =[{
    userId:1,
    firstName: 'aaa',
    lastName: 'a',
    email: 'a@a.com',
    mobileNo: '123',
    city: 'dd',
    zipCode: '1234',
    adress: 'glklklllllll',
    password: '123asdASD',
    cart:[]
 },{
    userId:2,
    firstName: 'as',
    lastName: 'agg',
    email: 'ad@ff.com',
    mobileNo: '12345',
    city: '999',
    zipCode: '78990',
    adress: 'cgdjgfjfjf',
    password: '1234dfhGGJ',
    cart:[]
 },{
    userId:3,
    firstName: 'iii',
    lastName: 'i',
    email: 'i@r.com',
    mobileNo: '67879',
    city: 'ddj',
    zipCode: '8888',
    adress: 'kgkykiyliu',
    password: 'gujgGHKGKJ8890',
    cart:[]
 }]
export {data,categorys,admins,users,gallery,Pruduct};