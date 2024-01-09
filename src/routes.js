import AdminForm from "./components/admin/AdminForm";
import {AdminPanel} from "./components/admin/AdminPanel";
import {Add} from "./components/admin/Add";
import Edit from "./components/admin/Edit";
import { Landing } from "./Landing";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import {UserPanel} from "./components/login/PanelUser";


export const routes = [
    {
        path:"/",
        label:"home",
        component: Landing,
        routes:[
            {
                path:"/admin",
                label:"admin",
                component:AdminForm,
                routes:[
                    {
                        path:"/adminpanel",
                        label:"adminpanel",
                        component:AdminPanel,
                        routes:[
                            {
                                path:"/addproducts",
                                label:"addproducts",
                                component:Add,
                            },
                            {
                                path:"/editproducts",
                                label:"editproducts",
                                component:Edit,
                            }
                        ]
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
            }
        ]
    },{
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
    }
]
