import LayoutHeader from "./LayoutHeader";
import LayoutFooter from "./LayoutFooter";
import BaseHeader from "./BaseHeader";
import BaseFooter from "./BaseFooter";
import { ReactNode } from "react";
import { useLocation } from 'react-router-dom'
import { ConfigProvider } from "antd";
function Layout({ children }: { children: ReactNode }) {
    const location = useLocation()
    const currentPath = location.pathname
    const Header = currentPath == '/login' || currentPath == '/register' || currentPath == 'reset-password' ? BaseHeader : LayoutHeader
    const Footer = currentPath == '/login' || currentPath == '/register' || currentPath == 'reset-password' ? BaseFooter : LayoutFooter
    return (
        <div className="app-wrap">
            <ConfigProvider
                theme={{
                    token: {
                        // Seed Token，影响范围大
                        colorPrimary: '#9a0000',
                        borderRadius: 2,

                        // 组件背景色
                        colorBgContainer: '#ffff',
                        //边框色
                        colorBorder: '#9a0000',
                        colorBgBase: '#fff',
                        colorPrimaryActive: '#fff'
                    },
                }}
            >
                <Header></Header>
                <main>{children}</main>
                <Footer></Footer>
            </ConfigProvider>
        </div>
    );
}
export default Layout;