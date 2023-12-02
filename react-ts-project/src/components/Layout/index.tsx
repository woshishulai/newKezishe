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
                        colorBgContainer: '#fff',
                        //边框色
                        colorBorder: '#9a0000',
                        colorBgBase: '#fff',
                        colorPrimaryActive: '#fff',
                        ///分割线
                        colorSplit: '#333',
                        // colorBgTextActive: '#fff',
                        // colorBgTextHover: '#fff',
                        //选中的颜色
                        controlItemBgActive: '#9a0000',
                        //控制组件项在禁用状态下的激活背景颜色。
                        // controlItemBgActiveHover: '#9a0000',
                        // //控制组件项在鼠标悬浮时的背景颜色。
                        controlItemBgHover: '#a61f1b',
                        // colorFillContentHover: '#9a0000'，
                        // colorTextLightSolid: '#fff',
                        // colorInfoActive: 'green'
                        // colorInfoTextActive: 'red'
                        //强制性设置的所有字体颜色
                        // colorText: '#007306'
                        //输入框和文本警用颜色
                        // colorTextQuaternary: '#007306'
                        //禁用的字体颜色
                        // colorTextDisabled: '#007306'.
                        //带背景颜色的
                        // colorTextLightSolid: '#007306'
                        //输入框
                        // colorTextPlaceholder: '#007306'
                        //比如下拉框展开时候的字体颜色
                        // colorTextPlaceholder: '#007306',
                        // colorInfoTextHover: '#007306'
                        // colorPrimaryText: '#007306'
                    },
                }}
            >
                <Header></Header>
                <main>{children}</main>
                <Footer></Footer>
            </ConfigProvider>
        </div >
    );
}
export default Layout;