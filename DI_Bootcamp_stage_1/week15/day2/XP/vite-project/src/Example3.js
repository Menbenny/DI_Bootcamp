import React from "react";
import data from "../complexData.json"

const Example3 = () => {
    return (
        <div>
            <h3>Experiences</h3>
            {data.Experiences.map((experience, index) => (
                <div key={index}>
                    <p>Compnay: {Experiences.company}</p>
                    <p>Role: {experience.role}</p>
                </div>
            ))}
        </div>
    )
}

export default Example3;