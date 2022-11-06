import React from "react";

const Student = ({match}) => {
    const {studentname, studentnum} = match.params;
    return ( 
        <div>
            <p>Student: Jhon Smith, Student No: 5000</p>
            <div>
                <div>{`The student name is "${studentname}"!`}</div>
                <div>{`The student number is ${studentnum}`}</div>
            </div>
        </div>
    );
}

export default Student;