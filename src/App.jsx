import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Dashboard from "./Component/Dashboard";
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>

            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="dashboard" element={<Dashboard/>}/> 
            
            </Route>
        </Routes>
        
        
        </BrowserRouter>
        </>
    )
}
export default App;
