import cat1 from "../img/cat-1.jpg";
import cat2 from "../img/cat-2.jpg";
import cat3 from "../img/cat-3.jpg";
import cat4 from "../img/cat-4.jpg";
import cat5 from "../img/cat-5.jpg";
import cat6 from "../img/cat-6.jpg";
import product1 from "../img/product-1.jpg";
import product2 from "../img/product-2.jpg";
import product3 from "../img/product-3.jpg";
import product4 from "../img/product-4.jpg";
import product5 from "../img/product-5.jpg";
import product6 from "../img/product-6.jpg";
import product7 from "../img/product-7.jpg";
import product8 from "../img/product-8.jpg";
const data =[
    {
        productType:"Men's dresses",
        productimg:product1,
        productName:'Colorful Stylish Shirt',
        productPrice:"$123.00",
        pruductUrl:function name(params) {
            return(this.productType+this.productName)
        }

    },
    {
        productType:"Women's dresses",
        productimg:product2,
        productName:'Colorful Stylish Shirt',
        productPrice:"$123.00",
        pruductUrl:function name(params) {
            return(this.productType+this.productName)
        }

    },
    {
        productType:"Baby's dresses",
        productimg:product3,
        productName:'Colorful Stylish Shirt',
        productPrice:"$123.00",
        pruductUrl:function name(params) {
            return(this.productType+this.productName)
        }

    },
    {
        productType:"Accerssoriess",
        productimg:product4,
        productName:'Colorful Stylish Shirt',
        productPrice:"$123.00",
        pruductUrl:function name(params) {
            return(this.productType+this.productName)
        }

    },
    {
        productType:"Bags",
        productimg:product5,
        productName:'Colorful Stylish Shirt',
        productPrice:"$123.00",
        pruductUrl:function name(params) {
            return(this.productType+this.productName)
        }

    },
    {
        productType:"Shoes",
        productimg:product6,
        productName:'Colorful Stylish Shirt',
        productPrice:"$123.00",
        pruductUrl:function name(params) {
            return(this.productType+this.productName)
        }

    },
    {
        productType:'bag',
        productimg:product7,
        productName:'Colorful Stylish Shirt',
        productPrice:"$123.00",
        pruductUrl:function name(params) {
            return(this.productType+this.productName)
        }

    },
    {
        productType:'bag',
        productimg:product8,
        productName:'Colorful Stylish Shirt',
        productPrice:"$123.00",
        pruductUrl:function name(params) {
            return(this.productType+this.productName)
        }

    },
]
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
export {data,categorys};