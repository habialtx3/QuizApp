import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppBackground from "../components/AppBackground";

export default function MainLayout() {
    return (
        <>
            <AppBackground />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}