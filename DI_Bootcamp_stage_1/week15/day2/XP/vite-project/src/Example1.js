import React from "react";
import data from "../complexData.json"

const Example1 = () => {
    return (
        <div>
            <h3>Social Medias</h3>
            <ul>
                {data.socialMedias.map((media, index) => (
                    <li key={index}>{media}</li>
                ))}
            </ul>
        </div>
    );
};

export default Example1