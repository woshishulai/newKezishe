import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="app-wrap">
            <Header />
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
}
export default Layout;