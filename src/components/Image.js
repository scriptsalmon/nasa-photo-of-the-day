import React from 'react';

import styled from 'styled-components';

const StyledImage = styled.div`
// transform: scale(1) rotateZ(180deg);

width: 60%;
height: 20rem;

img{
    width:100%;
    height:20rem;
    object-fit:cover;
    opacity:90%;
    border:1px solid ${a => a.theme.white};
  }
img:hover{
    opacity: 100%;
  }

`



export default function Image (props) {
    const { data } = props;
    
    return (
        <StyledImage>
            <h1>{data.title}</h1>

            <div className="Image-container">
                <img src={data.url} alt={data.title} onClick={() => window.open(`${data.hdurl}`, "_blank")}/>
            </div>

        </StyledImage>
    )
}