import React from 'react';

export default function Image (props) {
    const { data } = props;
    
    return (
        <div className="Image">
            <h1>{data.title}</h1>

            <div className="Image-container">
                <img src={data.url} alt={data.title} onClick={() => window.open(`${data.hdurl}`, "_blank")}/>
            </div>

        </div>
    )
}