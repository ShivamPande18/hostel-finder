const List = ({name,location,distance,unit,detail}) => {
    return (
        <div className="list">
            <div className="grid">
                <div className="item1">
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} alt=""/>
                </div>
                <div className="item2">
                    <div>
                        <h1>{name}</h1>
                        <h3>{location} ({distance} {unit})</h3>
                    </div>
                    <div>
                        $4000
                    </div>
                    <div>
                        <p>{detail}</p>
                    </div>
                    <div>
                        <button className="listBtnMore">Read More</button>
                        <button className="listBtnContact">Contact</button>
                    </div>
                    
                    
                    
                    
                </div>
            </div>

        </div>
    );
}

export default List;