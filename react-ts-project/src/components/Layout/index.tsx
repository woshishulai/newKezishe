import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import BaseHeader from './BaseHeader';
import BaseFooter from './BaseFooter';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
function Layout({ children }: { children: ReactNode }) {
    const location = useLocation();
    const currentPath = location.pathname;
    const Header =
        currentPath == '/login' || currentPath == '/register' || currentPath == 'reset-password'
            ? BaseHeader
            : LayoutHeader;
    const Footer =
        currentPath == '/login' || currentPath == '/register' || currentPath == 'reset-password'
            ? BaseFooter
            : LayoutFooter;
    return (
        <div className="app-wrap">
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#9a0000',
                        controlHeight: 52,
                        borderRadius: 0
                    }
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
