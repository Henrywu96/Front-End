import React from "react";
import LikeButton from "./LikeButton";
import Greeter from "./Greeter";

const Display = () => {
    // var likeArr = ["Like!","Like!","Like!","Like!","Like!","Like!","Like!","Like!","Like!"];
    // return likeArr.map((val) => {
    //     return <button>{val}</button>;
    // });

    // for loop
    const likes = [];
    for (var i = 0; i < 1; i++) {
        likes.push(<LikeButton />);
    }

    var propData = {
        name: "Henry",
        course: "Full Stack",
        year: 2022
    }

    return <div className="container">
        <Greeter 
            {...propData}
        />
        { likes }
    </div>


}

export default Display;