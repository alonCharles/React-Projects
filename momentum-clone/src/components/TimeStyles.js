import styled from "styled-components";

export const TimeContainer = styled.div`
position:relative;
text-align:center;
padding:1rem;
top:250px;
// transform: translate(-50%, 50%);
`

export const TimeStamp = styled.p`
font-size: 8rem;
font-weight:500;
margin:0;
padding:0;

@media screen and (max-width: 600px) {
    font-size: 5rem
}
`

export const Greeting = styled.p`
font-size: 4rem
font-weight: 600;
margin:0;
padding:0;

@media screen and (max-width:600px) {
font-size: 3rem
}
`