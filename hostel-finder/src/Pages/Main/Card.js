const Card = () => {
   return (
      <div className="card">
         <button className="leftSlide">{"<"}</button>
         <button className="rightSlide">{">"}</button>
         <img src={require("../../Images/hotelImg1.jpg")} alt="" srcset="" />
         <div className="cardData">
            <div className="cardDataTxt">
               <h1>Stanza Living</h1>
               <h2>3BHK</h2>
               <h2>1KM ~ $12000</h2>
            </div>
         </div>
      </div>
   );
};

export default Card;
