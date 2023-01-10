import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 420px;
    background-color: lightgray;
    justify-content: space-between;
    margin: 5px;
`;

export const Header = styled.header`
   text-align: center;
   font-size: 20px;
   padding-top: 30px;
`;

export const Image = styled.img`
    align-self: center;
    width: 130px;
    height: 130px;
    
`;

export const Description = styled.a`
    font-size: 15px;
    align-self: center;
`;

export const Price = styled.a`
    font-size: 25px;
    align-self: center;
`;

export const Button = styled.button`
    background-color: grey;
    height: 50px;
`