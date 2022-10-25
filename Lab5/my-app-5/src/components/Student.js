import React from "react";
import Courses from "./Courses";
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const Student = (props) => {

    const courseNum = [];
    for (var i = 0; i < props.enrolled; i++) {
        courseNum.push(<p><Courses /> {i}</p>);
    }

    return (
        <>
            <p>
                Student <b>{props.name}</b> with student number <b>{props.number}</b> 
            </p>
            <p>
                Student is enrolled in <b>{courseNum}</b>
            </p>
        </>
    );
};

export default Student;