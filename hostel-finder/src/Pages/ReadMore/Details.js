import Navbar from "../Main/NavBar"
import './style.css';

const Details = () => {

    function onScrollImg(ind){
        console.log(ind);
    }

    return (
        <div className = "details">
            <Navbar/>
            <div className="detailCont">
                <div className="detailHeader">
                    <h1>Double room in lovely apartment</h1>
                    <p>Tiger Cicle</p>
                </div>
                
                <div className="detailImgCont">
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} alt="" />
                </div>

                <div className="detailImgScroll">
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} onClick = {() => onScrollImg(0)} alt = ""/>
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} onClick = {() => onScrollImg(1)} alt = ""/>
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} onClick = {() => onScrollImg(2)} alt = ""/>
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} onClick = {() => onScrollImg(3)} alt = ""/>
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} onClick = {() => onScrollImg(4)} alt = ""/>
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} onClick = {() => onScrollImg(5)} alt = ""/>
                    <img src={require("D:/CS/ReactProjects/HostelFinder/hostel-finder/src/Images/hotelImg1.jpg")} onClick = {() => onScrollImg(6)} alt = ""/>
                </div>
                
                <div className="detailSep"></div>

                <h2>What does this place has to offer</h2>
                
                <div className="detailProps">
                    <div className="detailProp">
                        <h1>Price</h1>
                        <p>200$</p>
                    </div>
                    <div className="detailProp">
                        <h1>Price</h1>
                        <p>200$</p>
                    </div>
                    <div className="detailProp">
                        <h1>Price</h1>
                        <p>200$</p>
                    </div>
                    <div className="detailProp">
                        <h1>Price</h1>
                        <p>200$</p>
                    </div>
                    <div className="detailProp">
                        <h1>Price</h1>
                        <p>200$</p>
                    </div>
                    <div className="detailProp">
                        <h1>Price</h1>
                        <p>200$</p>
                    </div>
                </div>

                <div className="detailSep"></div>

                <div className="detailDesc">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, rem iste asperiores aperiam mollitia molestias. Doloremque ducimus, odit tempora distinctio porro, dolore rerum rem quas non et animi quam facilis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius dicta, voluptatem repellendus explicabo, quibusdam numquam aut nobis a maxime iste, est illum ipsa saepe et ea iure distinctio. Quasi.
                    </p>
                </div>

                <div className="detailSep"></div>

                <h2>Meet the owner</h2>

                <div className="detailContact">
                    9997882063
                </div>
                

            </div>
        </div>
    );
}
export default Details;