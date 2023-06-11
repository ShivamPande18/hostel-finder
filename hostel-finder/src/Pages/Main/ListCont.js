import List from "./List";

const ListCont = () =>{

    const dataList = [
        {
            name: "Flat Name",
            location: "Location",
            distance: 100,
            unit: "m",
            detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste doloremque ullam atque necessitatibus suscipit ad. Ad dignissimos atque debitis eos? Tenetur eum fuga et ratione accusamus dignissimos hic distinctio architecto!"
        },

        {
            name: "PG Name",
            location: "Location",
            distance: 12,
            unit: "km",
            detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste doloremque ullam atque necessitatibus suscipit ad. Ad dignissimos atque debitis eos? Tenetur eum fuga et ratione accusamus dignissimos hic distinctio architecto!"
        },

        {
            name: "Hostel Name",
            location: "Location",
            distance: 10,
            unit: "km",
            detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste doloremque ullam atque necessitatibus suscipit ad. Ad dignissimos atque debitis eos? Tenetur eum fuga et ratione accusamus dignissimos hic distinctio architecto!"
        },
    ]; 

    return(
        <div className="listCont">
            <ul>
                {
                    dataList.map((element) => 
                        <li>
                            <List
                                name = {element.name}
                                location = {element.location}
                                distance = {element.distance}
                                unit = {element.unit}
                                detail = {element.detail}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default ListCont;