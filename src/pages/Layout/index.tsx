import {Layout, Menu, MenuProps, Popconfirm} from 'antd'
import {DiffOutlined, EditOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons'
import './index.scss'
import Sider from "antd/es/layout/Sider";
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import React, {useEffect} from "react";
import useStore from "@/store";
import {observer} from "mobx-react-lite";

const {Header} = Layout

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem("数据概览", "/", <HomeOutlined/>),
    getItem("内容管理", "/article", <DiffOutlined/>),
    getItem("发布文章", "/publish", <EditOutlined/>)
];

const GeekLayout: React.FC = () => {
    const {pathname} = useLocation();
    const {userStore, loginStore, channelStore} = useStore();
    useEffect(() => {
        channelStore.loadChannelList();
        userStore.getUserInfo();
    }, [userStore, channelStore]);

    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = e => {
        navigate(e.key);
    };

    const confirm = (e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
        loginStore.logOut();
        navigate("/login");
    };
    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <div className="user-info">
                    <span className="user-name">{userStore.userInfo.name}</span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出？"
                                    okText="退出"
                                    cancelText="取消"
                                    onConfirm={confirm}>
                            <LogoutOutlined/> 退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        onClick={onClick}
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={[pathname]}
                        selectedKeys={[pathname]}
                        style={{height: '100%', borderRight: 0}}
                        items={items}/>
                </Sider>
                <Layout className="layout-content" style={{padding: 20}}>
                    {/* 二级路由出口 */}
                    <Outlet/>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default observer(GeekLayout);