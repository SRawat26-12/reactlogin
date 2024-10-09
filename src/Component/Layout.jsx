import { Outlet } from "react-router-dom";
import TopNavbar from "./TopNavbar";
const Layout=()=>{
    return(
        <>
        <TopNavbar/>
        <Outlet/>
        
        </>
    )
}
export default Layout;