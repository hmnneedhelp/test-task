import Header from "../Header/Header";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import './Layout.style.scss'

export default function Layout(){
    return(
        <div className="main-layout">
            <Header />
            <div className="layout-inner">
                <Navbar />
                <Main />
            </div>
        </div>
    )
}