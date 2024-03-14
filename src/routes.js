import AdminForm from "./components/admin/AdminForm";
import {AdminPanel} from "./components/admin/AdminPanel";
import { Landing } from "./Landing";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import {UserPanel} from "./components/login/PanelUser";
import { Cart } from "./components/Cart";
import { Detail } from "./components/Detail";
import { Sidebar } from "./components/sidebar";
import { Category } from "./components/Category";
import { Categorys } from "./components/categorys";
import { EditInformatio, EditInformation } from "./components/EditInformation";


export const routes = [
    {
        path:"/",
        label:"home",
        component: Landing,
        routes:[
            {
                path:"/posts",
                label:"posts",
                component:Categorys,
                routes:[
                    {
                    path:"/",
                    label:"home",
                    component:Sidebar,
                    },
                    {
                        path:":cat",
                        label:"post",
                        component:Category,
                    }
                ],
            },
            {
                path:"/detail",
                label:"/detail",
                component:Detail,
              
            },
            {
                path:"/admin",
                label:"admin",
                component:AdminForm,
                routes:[
                    {
                        path:"/adminpanel",
                        label:"adminpanel",
                        component:AdminPanel,
                    }
                ]
            },
        ]
    },
    {
        path:"/login",
        label:"login",
        component:Login,
        routes:[
            {
                path:"/userpanel",
                label:"userpanel",
                component:UserPanel,
                routes:[
            {
                path:"/information",
                label:"information",
                component:EditInformation,
            },
            {
                path:"/cart",
                label:"cart",
                component:Cart,
              
            }
                ]
            },

        ]
    },
    {
        path:"/register",
        label:"register",
        component:Register,
        routes:[
            {
                path:"/userpanel",
                label:"userpanel",
                component:UserPanel,
            }
        ]
    },

]
