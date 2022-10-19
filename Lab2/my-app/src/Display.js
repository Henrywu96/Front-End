import React from "react";

const Display = () => {
    var likeArr = ["Like!","Like!","Like!","Like!","Like!","Like!","Like!","Like!","Like!"];
    return likeArr.map((val) => {
        return <button>{val}</button>;
    });
}

export default Display;