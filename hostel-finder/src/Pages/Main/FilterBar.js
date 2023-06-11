import FilterPopUp from "./FilterPopUp";
import {useState} from "react";

const FilterBar = () =>{

    const [popUp, setPopUp] = useState(false);

    const onFilterOpen = () => {
        setPopUp(true);
    }

    const onFilterClose = () => {
        // console.log("new click");
        setPopUp(false);
    }

    return(
        <div className="filterBar">
            <input type="text" placeholder = "Search..."/>
            <button className = "filterBtn" onClick = {onFilterOpen}>Filter</button>

            {popUp ? <FilterPopUp onFilterClose = {onFilterClose}/>:null}
        </div>
    );
}

export default FilterBar;