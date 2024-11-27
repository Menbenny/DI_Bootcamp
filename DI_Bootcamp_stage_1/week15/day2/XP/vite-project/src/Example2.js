import React from "react";
import data from "../complexData.json"

const Example2 = () => {
    return (
        <div>
            <h3>Skills</h3>
            <ul>
                {data.Skills.map((skill, index) => (
                    <li key={index}>{skills}</li>
                ))}
            </ul>
        </div>
    );
};

export default Example2