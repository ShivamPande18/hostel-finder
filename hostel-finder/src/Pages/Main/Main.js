// import Navbar from "./NavBar";
// import ListCont from "./ListCont";
// import FilterBar from "./FilterBar";
// import { useLocation } from 'react-router-dom';
import MainHeader from "./MainHeader";
import MainCont from "./MainCont";
import './style.css';

const Main = () =>{
    // const location = useLocation();
    return(
        <div className = "main">
            {/* <p>{location.state.name}</p> */}
            {/* <Navbar/> */}
            <MainHeader/>
            <MainCont/>

            {/* <FilterBar/>
            <ListCont/> */}
        </div>
    );
}

export default Main;