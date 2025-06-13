import styled from "styled-components";

export const CellStyle = styled.button`
    background-color:${(props)=>props.theme.colors.secondary};
    border: none;
    border-radius:10px;
    box-shadow: 5px 10px ${(props)=> props.theme.colors.tertiary};
    width: 10rem;
    height: 10rem;
    color: ${(props) => props.theme.colors.primary};
    font-size: 3rem;
    cursor:pointer;
`