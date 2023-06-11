const FilterPopUp = ({ onFilterClose}) =>{
    return(
        <div className="filterOverlay">
            <div className="filterCont">
                <div className="filterContHeader">
                    Filters
                    </div>

                <div className="filterContBodyWrapper">
                    <div className="filterContBody">

                        <div className="filterPrice">
                            <h1>Price Range</h1>
                            <div className="filterPricePic">
                                <button className="filterPriceBtnActive">Any</button>

                                <button className="filterPriceBtn">$500</button>

                                <button className="filterPriceBtn">$1000</button>

                                <button className="filterPriceBtn">$1500</button>

                                <button className="filterPriceBtn">$2000</button>

                                <button className="filterPriceBtn">$2500</button>

                                <button className="filterPriceBtn">$3000</button>
                            </div>
                        </div>

                        <div className="filterSep"></div>

                        <div className="filterPrice">
                            <h1>Room Mates</h1>
                            <div className="filterPricePic">
                                <button className="filterPriceBtnActive">Any</button>

                                <button className="filterPriceBtn">1</button>

                                <button className="filterPriceBtn">2</button>

                                <button className="filterPriceBtn">3</button>

                                <button className="filterPriceBtn">4</button>

                                <button className="filterPriceBtn">5</button>

                                <button className="filterPriceBtn">5+</button>
                            </div>
                        </div>

                        <div className="filterSep"></div>

                        <div className="filterType">
                            <h1>Room Type</h1>
                            <div className="filterTypePic">
                                <button>PG</button>
                                <button>Flats</button>
                            </div>
                        </div>

                        <div className="filterSep"></div>


                        <div className="filterPrice">
                            <h1>Distance</h1>
                            <div className="filterPricePic">
                                <button className="filterPriceBtnActive">Any</button>

                                <button className="filterPriceBtn">1Km</button>

                                <button className="filterPriceBtn">2Km</button>

                                <button className="filterPriceBtn">3Km</button>

                                <button className="filterPriceBtn">4Km</button>

                                <button className="filterPriceBtn">5Km</button>

                                <button className="filterPriceBtn">+5Km</button>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="filterContFooter">
                    <p>Clear all</p>
                    <button onClick = {onFilterClose}>Apply</button>
                </div>
            </div>
        </div>

    );
}

export default FilterPopUp;