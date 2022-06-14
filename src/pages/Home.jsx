import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar.jsx";
import ItemListContainer from "../component/ItemListContainer";

const Home = () => {
    return(
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>        
    </>
    )
}

export default Home;