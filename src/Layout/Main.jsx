import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import '../cssFile/swiper.css';
import { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";


const Main = () => {
    const { theme } = useContext(AuthContext)
    return (
        <div id={theme}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;