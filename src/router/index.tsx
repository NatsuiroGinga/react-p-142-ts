import {useRoutes} from "react-router-dom";
import GeekLayout from "@/pages/Layout";
import Login from "@/pages/Login";
import AuthComponent from "@/components/AuthComponent";
import React from "react";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

// 路由集中管理
const routesList = [
    // Layout
    {
        path: '/',
        element: <AuthComponent><GeekLayout/></AuthComponent>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "article",
                element: <Article/>
            },
            {
                path: "publish",
                element: <Publish/>
            }
        ]
    },
    // Login
    {
        path: '/login',
        element: <Login/>,
    },
]

// 2. 使用useRoutes方法传入routesList生成Routes组件
const WrapperRoutes = () => useRoutes(routesList);

export default WrapperRoutes;