import React from 'react';

export default function Image (props) {
    const { data } = props;
    
    return (
        <div>
            <img src={data.url} />
        </div>
    )
}