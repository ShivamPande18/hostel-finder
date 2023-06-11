const MainHeader = () =>{
    return(
        <div className="mainHeader">
            <div className="heroCover">
                <h1 className = "heroTxt">Let's Find You</h1>
                <div className="heroDropCont">
                    <h2>{"<"}</h2>
                    <h1>HOSTEL</h1>
                    <h2>{">"}</h2>

                </div>
            </div>
            <img className = "headImg" src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} alt  = "sad"/>
        </div>
    );
}

export default MainHeader;