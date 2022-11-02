import "@/App.css"
import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Login from "@/pages/Login";
import Layout from "@/pages/Layout";
import {Button} from "antd";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={"App"}>
                <Link to={"/login"}>
                    <Button>登录</Button>
                </Link>
                <br/>
                <Link to={"/"}>
                    <Button type={"primary"}>首页</Button>
                </Link>
                <Routes>
                    {/*创建路由path和组件对应关系*/}
                    <Route path={"/"} element={<Layout></Layout>}></Route>
                    <Route path={"/login"} element={<Login></Login>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
